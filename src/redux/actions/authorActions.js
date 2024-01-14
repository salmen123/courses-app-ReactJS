import axios from 'axios';

import * as types from './actionTypes';

export const loadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return dispatch => {
    return axios
      .get('/db.json')
      .then(response  => {
        const authors = response.data.authors
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => console.log(error));
  };
};
