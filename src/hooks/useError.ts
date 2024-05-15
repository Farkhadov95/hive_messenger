import { useCallback } from "react";
import { useErrorStore } from "../store/errorStore";

const useErrorHandler = () => {
  const setError = useErrorStore((state) => state.setError);
  const setUserError = useErrorStore((state) => state.setUserError);

  const handleFail = useCallback(
    (error: string) => {
      setError(error);
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    },
    [setError]
  );

  const handleUserFail = useCallback(
    (error: string) => {
      setUserError(error);
      setTimeout(() => {
        setUserError("");
      }, 3000);
    },
    [setUserError]
  );

  return {
    handleUserFail,
    handleFail,
  };
};

export default useErrorHandler;
