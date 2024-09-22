import { useEffect } from 'react';
import { eventBus, Data } from '@/utils/eventBus.ts';

export const useMessageSubscription = (
  callback: (message: Data) => void
): void => {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe('newMessage', callback);
    return unsubscribe;
  }, [callback]);
};
