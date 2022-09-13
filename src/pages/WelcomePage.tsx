import { reverse } from 'named-urls';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Base from '../components/layout/Base';
import useUser from '../core/hooks/useUser';
import routes from '../core/routes';

const INITIAL_STATE = {
  name: '',
};

type FormType = typeof INITIAL_STATE;

const WelcomePage = () => {
  const { push } = useHistory();
  const { loading } = useUser();

  const { register, handleSubmit } = useForm<FormType>();

  const onSubmit = useCallback(
    (data: FormType) => {
      push(reverse(routes.you.name, { name: data.name }));
    },
    [push]
  );

  const isLoading = loading === 'loading';

  return (
    <Base>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Your name'
          {...register('name')}
          disabled={isLoading}
        />
        <button type='submit' disabled={isLoading}>
          Go!
        </button>
      </form>
    </Base>
  );
};

export default WelcomePage;
