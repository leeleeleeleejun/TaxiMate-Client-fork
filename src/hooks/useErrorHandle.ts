import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const useErrorHandle = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  if (error) {
    if ('status' in error) {
      let errMsg = '';

      if ('data' in error) {
        const errorData = error.data as {
          message: string;
        };
        errMsg = errorData.message;
      } else {
        errMsg = 'error' in error ? error.error : 'An unknown error occurred';
      }

      alert(errMsg);
    }
  }
};

export default useErrorHandle;
