import axios from 'axios';
import { API } from '../../shared/constants';
import { Success, Failed, Loading } from './types';
import { store } from '../../store/store';

export const getPhotos = (types) => {
  const { dispatch } = store;

  if (types.length > 0) {
    dispatch(Loading());
    axios.get(`${API}/${types}`)
      .then(res => {
        setTimeout(() => {
          dispatch(Success(res.data));
        }, 2500);
      })
      .catch(err => {
        dispatch(Failed(err.message));
      })
  } else {
    dispatch(Success([]));
  }
};