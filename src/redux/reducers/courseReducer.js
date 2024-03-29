import initialState from './initialState';
import * as types from '../actions/actionTypes';

const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;
