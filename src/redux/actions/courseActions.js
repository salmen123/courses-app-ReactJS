import axios from 'axios';

import * as types from './actionTypes';

export const createCourse = course => {
  return { type: types.CREATE_COURSE, course };
};

export const loadCourseSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const loadCourses = () => {
  return dispatch => {
    return axios
      .get('/db.json')
      .then(response => {
        const courses = response.data.courses;
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => console.log(error));
  };
};
