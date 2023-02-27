import { useState } from "react";

const countDefaultValue = 0;

const useCounter = (): [number, () => void, () => void] => {
  const [count, setCount] = useState<number>(countDefaultValue);
  const incrementCount = () => setCount((prevState) => prevState + 1);
  const decrementCount = () => setCount((prevState) => prevState - 1);

  return [count, incrementCount, decrementCount];
};

export default useCounter;
