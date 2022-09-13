import { createContext, useCallback, useEffect } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import { BaseComponent } from '../../components/layout/type';
import useReduxDispatch from '../hooks/useReduxDispatch';
import useReduxSelector from '../hooks/useReduxSelector';
import { feedbackAction } from '../store/slices/feedback/actions.feedback';

export type FeedbackType = 'info' | 'success' | 'warning' | 'error';

export interface FeedbackData {
  type?: FeedbackType;
  message: string | undefined;
}

interface FeedbackMessage extends FeedbackData {
  toastProps?: ToastOptions;
}

interface FeedbackProviderInterface {
  feedback(data: FeedbackMessage): void;
}

export const FeedbackContext = createContext<FeedbackProviderInterface>(
  {} as FeedbackProviderInterface
);

const FeedbackProvider = ({ children }: BaseComponent) => {
  const dispatch = useReduxDispatch();
  const { type, message } = useReduxSelector((state) => state.feedback?.data);

  const handleFeedback = useCallback(
    ({ message, type = 'info' }: FeedbackMessage) => {
      dispatch(feedbackAction({ type, message }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (message) {
      toast(message, {
        type,
        onClose: () => {
          dispatch(feedbackAction({ type: 'info', message: undefined }));
        },
      });
    }
  }, [dispatch, type, message, handleFeedback]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback: handleFeedback,
      }}
    >
      <ToastContainer />
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
