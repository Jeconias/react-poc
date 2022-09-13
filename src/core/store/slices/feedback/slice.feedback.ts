import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { FeedbackData } from '../../../providers/FeedbackProvider';
import { feedbackAction } from './actions.feedback';

interface IFeedback {
  data: FeedbackData;
}

const FeedbackSlice = createSlice<IFeedback, SliceCaseReducers<IFeedback>>({
  name: 'feedback',
  initialState: {
    data: {
      type: 'info',
      message: undefined,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<string, PayloadAction<FeedbackData>>(
      feedbackAction.toString(),
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});

export default FeedbackSlice;
