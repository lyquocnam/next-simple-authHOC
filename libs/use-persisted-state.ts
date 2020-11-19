import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function isClientSide(): boolean {
  return typeof window !== "undefined";
}


function usePersistedState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    if (isClientSide()) {
      const item = localStorage.getItem(key);
      // console.log(key, item);
      if (item === undefined || item === null) return defaultValue;

      return (JSON.parse(item) as T) || defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, JSON.stringify(state)]);

  return [state, setState];
}

export default usePersistedState;
