import { all } from 'redux-saga/effects';
import Posts from './posts';
export default function* rootSaga(getState) {
    yield all([
        Posts()
    ]);
}