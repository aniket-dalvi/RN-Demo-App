import {SET_USER_DATA} from '../actions/UserDetailsActions';

export function UserDetailsReducer(state = {userDetails: []}, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return {...state, userDetails: action.data};
    }
    default: {
      return state;
    }
  }
}
