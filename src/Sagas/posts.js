import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { FETCH_POSTS, SUCCESS_FETCH_POSTS, CREATE_POST, SUCCESS_CREATE_POST } from '../actions/types'
import axios from 'axios';

const state = state => state.posts;
export function* fetchData() {
    try {
        const data = yield call(function () {
            return axios.get('http://localhost:3000/posts')
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    return err
                })
        })
        yield put({ type: SUCCESS_FETCH_POSTS, payload: data })
    } catch (err) {
        console.log("Fail Fetch Data", err)
    }
}
export function* createPost() {
    try {
        const statePosts = yield select(state);
        debugger
        const data = yield call(function () {
            return axios.post('http://localhost:3000/posts', statePosts.form)
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    return err
                })
        })
        yield put({ type: SUCCESS_CREATE_POST, payload: data })
    } catch (err) {
        console.log("Fail Create Data", err)
    }
};
// export function* DeleteByID() {
//     try {
//         const data = yield call(function () {
//             return axios.get('http://localhost:3000/posts')
//                 .then((res) => {
//                     return res.data
//                 })
//                 .catch((err) => {
//                     return err
//                 })
//         })
//         yield put({ type: SUCCESS_FETCH_POSTS, payload: data })
//     } catch (err) {
//         console.log("Fail Fetch Data", err)
//     }
// }

export default function* rootSaga() {
    yield all([
        takeEvery(FETCH_POSTS, fetchData),
        takeEvery(CREATE_POST, createPost),
    ])
}