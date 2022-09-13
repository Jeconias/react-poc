import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

const useReduxDispatch = () => useDispatch<AppDispatch>();

export default useReduxDispatch;
