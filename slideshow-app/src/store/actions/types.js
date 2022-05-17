export const SUCCESS = 'SUCCES';
export const FAILED = 'FAILED';
export const LOADING = 'LOADING';

export const Success = photos => ({
    type: SUCCESS,
    payload: photos
  });
  
  export const Loading = () => ({
    type: LOADING
  });
  
  export const Failed = error => ({
    type: FAILED,
    payload: {
      error
    }
  });