import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useReduxSelector;
