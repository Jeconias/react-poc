import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFeedback from '../core/hooks/useFeedback';
import useReduxDispatch from '../core/hooks/useReduxDispatch';
import useUser from '../core/hooks/useUser';
import routes from '../core/routes';
import { authAsyncThunk } from '../core/store/slices/auth/actions.auth';

const VisitorPage = () => {
  const { name } = useParams<{ name: string }>();
  const { loading } = useUser();
  const { feedback } = useFeedback();
  const dispatch = useReduxDispatch();

  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const resp = await dispatch(authAsyncThunk({ name }));
      if (authAsyncThunk.fulfilled.match(resp)) {
        setText(`Your name is ${resp.payload.name}?`);
        feedback({
          type: 'success',
          message: 'Nice!',
        });
      } else if (authAsyncThunk.rejected.match(resp)) {
        //TODO: Add type of payload error (asyncThunk)
        setText(`Sorry, ${(resp.payload as any).error.data?.name} ;c`);
      }
    })();
  }, [dispatch, feedback, name]);

  const isError = loading === 'error';
  const isLoading = loading === 'loading';

  return (
    <>
      {isLoading ? <>Loading...</> : <h1>{text}</h1>}
      {isError && <Link to={routes.welcome}>Try Again</Link>}
    </>
  );
};

export default VisitorPage;
