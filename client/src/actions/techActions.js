import {
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  DELETE_TECH,
  ADD_TECH
} from './types';

export const setLoading = () => ({ type: SET_LOADING });

// Get technicians from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err?.response?.statusText
    });
  }
};

// Add new technician
export const addTech = tech => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err?.response?.statusText
    });
  }
};

// Delete technician
export const deleteTech = id => async dispatch => {
  try {
    dispatch(setLoading());

    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err?.response?.statusText
    });
  }
};
