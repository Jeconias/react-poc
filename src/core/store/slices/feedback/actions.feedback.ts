import { createAction } from '@reduxjs/toolkit';
import { FeedbackData } from '../../../providers/FeedbackProvider';

export const feedbackAction = createAction(
  'feedback/update',
  (data: FeedbackData) => ({ payload: data })
);
