import { PayloadAction } from '@reduxjs/toolkit';

export type LoadingType = 'idle' | 'ok' | 'loading' | 'error';

export type ActionWithArg<T, A = any> = PayloadAction<T, string, { arg?: A }>;
