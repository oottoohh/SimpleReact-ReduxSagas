import { FETCH_POSTS, HANDLE_STATE, CREATE_POST } from './types';

// export const fetchPosts = () => dispatch => {
//   fetch('http://localhost:3000/posts')
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };
export function fetchPosts(value) {
  return {
    type: FETCH_POSTS,
    value
  };
}
export function handleState(property, value) {
  return (dispatch, getState) => {
    dispatch({ type: HANDLE_STATE, value: value, field: property });
  };
}

export function createPost() {
  return {
    type: CREATE_POST,
  };
}

// export const createPost = postData => dispatch => {
//   fetch('http://localhost:3000/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };
