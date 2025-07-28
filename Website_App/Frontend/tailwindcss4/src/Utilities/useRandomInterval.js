import { useEffect, useRef } from "react";

export const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId.current = setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, nextTickAt);
    };

    handleTick();

    return () => clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = () => clearTimeout(timeoutId.current);
  return cancel;
};
