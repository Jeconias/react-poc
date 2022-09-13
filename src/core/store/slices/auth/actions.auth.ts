import { api } from '../../../api';
import { asyncThunk } from '../../asyncThunk';

export const authAsyncThunk = asyncThunk('authentication', api.account.auth);
