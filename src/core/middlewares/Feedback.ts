import { PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { AnyAction, MiddlewareAPI } from 'redux';
import { ThunkOptions } from '../store/asyncThunk';
import { feedbackAction } from '../store/slices/feedback/actions.feedback';

const Feedback =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: PayloadAction<any, string, { arg: ThunkOptions }>) => {
    if (
      action.type.endsWith('rejected') &&
      !store.getState()?.feedback?.data?.message &&
      !action.meta?.arg?.thunkOptions?.ignoreFeedbackGlobal
    ) {
      const message =
        action.payload?.message || 'Ops! Tivemos um erro inesperado.';

      store.dispatch(feedbackAction({ type: 'error', message }));
    }

    return next(action);
  };

export default Feedback;
