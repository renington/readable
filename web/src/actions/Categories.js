import * as types from '../types'
import axios from 'axios' 
axios.defaults.headers.common['Authorization'] = 'auth-string';

export const fetchCategories = dispatch => {
    return dispatch => {
      axios.get(`${types.API_HOST}/categories`)
        .then((categoriesReponse) => {
          dispatch({type: types.FETCH_CATEGORIES, categories: categoriesReponse.data.categories })
        })
        .catch((categoriesError) => {
          dispatch({ errors: categoriesError })
        })
    }
  }