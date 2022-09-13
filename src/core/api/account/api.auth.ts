import { AxiosResponse } from 'axios';
import { User } from './api.account.types';

type AuthRequest = {
  name: string;
};

export type AuthResponse = AxiosResponse<User>;

export const auth = (options: AuthRequest) =>
  new Promise<AxiosResponse<User>>((resolver, reject) =>
    setInterval(() => {
      if (options.name === 'you') {
        resolver({
          data: {
            name: 'Jeconias',
          },
        } as AxiosResponse<User>);
      }

      reject({
        data: {
          name: options.name,
        },
      } as AxiosResponse<User>);
    }, 1500)
  );
