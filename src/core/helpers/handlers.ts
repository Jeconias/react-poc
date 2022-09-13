import { stringify } from 'qs';

export const qsResolver = (data: object) =>
  stringify(data, { addQueryPrefix: true });
