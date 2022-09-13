import { AsyncThunkOptions, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { RootState } from '.';

type AsyncThunkRequest<Request, Response> = (
  data: Request
) => Promise<AxiosResponse<Response>>;

export type ThunkOptions = {
  thunkOptions?: {
    isForce?: boolean;
    ignoreFeedbackGlobal?: boolean;
  };
};

export const asyncThunk = <Req, Res>(
  typePrefix: string,
  request: AsyncThunkRequest<Req & ThunkOptions, Res>,
  options?: AsyncThunkOptions<Req & ThunkOptions, { state: RootState }>
) =>
  createAsyncThunk<Res, Req & ThunkOptions>(
    typePrefix,
    async (requestData, { rejectWithValue }) => {
      try {
        const result = await request({
          ...requestData,
          thunkOptions: undefined,
        });
        return result.data;
      } catch (err: any) {
        if (err?.response) {
          return rejectWithValue({
            status: err.response.status,
            data: err.response.data,
          });
        }

        return rejectWithValue({
          message: err?.message,
          error: err,
        });
      }
    },
    {
      condition: options?.condition,
    }
  );
