import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeedbackProvider from './core/providers/FeedbackProvider';
import routes from './core/routes';
import { store } from './core/store';
import VisitorPage from './pages/VisitorPage';
import WelcomePage from './pages/WelcomePage';

const App = () => (
  <main>
    <Provider store={store}>
      <FeedbackProvider>
        <BrowserRouter>
          <Switch>
            <Route path={routes.you.name} component={VisitorPage} />
            <Route path={routes.welcome} component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </FeedbackProvider>
    </Provider>
  </main>
);

export default App;
