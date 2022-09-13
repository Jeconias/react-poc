import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { AuthResponse } from '../../../api/account/api.auth';
import { ActionWithArg, LoadingType } from '../../types';
import { authAsyncThunk } from './actions.auth';

interface AuthSliceType {
  loading: LoadingType;
  data: AuthResponse | undefined;
}

const AuthSlice = createSlice<AuthSliceType, SliceCaseReducers<AuthSliceType>>({
  name: 'auth',
  initialState: {
    loading: 'idle',
    data: undefined,
  },
  reducers: {},
  extraReducers: (b) => {
    // List
    b.addCase(authAsyncThunk.pending.toString(), (state) => {
      state.loading = 'loading';
    });
    b.addCase(
      authAsyncThunk.fulfilled.toString(),
      (state, action: ActionWithArg<AuthResponse>) => {
        state.loading = 'ok';
        state.data = action.payload;
      }
    );
    b.addCase(authAsyncThunk.rejected.toString(), (state) => {
      state.loading = 'error';
    });
  },
});

export default AuthSlice;
