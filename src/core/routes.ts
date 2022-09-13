import { include } from 'named-urls';

const routes = {
  welcome: '/',
  you: include('/visitor', {
    name: ':name',
  }),
};

export default routes;
