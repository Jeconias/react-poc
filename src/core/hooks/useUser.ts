import useReduxSelector from './useReduxSelector';

const useUser = () => useReduxSelector((state) => state.auth);

export default useUser;
