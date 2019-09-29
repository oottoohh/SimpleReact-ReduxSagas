import { SUCCESS_FETCH_POSTS, HANDLE_STATE, SUCCESS_CREATE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  form: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS_FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case SUCCESS_CREATE_POST:
      return {
        ...state,
        item: action.payload
      };
    case HANDLE_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        }
      };
    }
    default:
      return state;
  }
}
