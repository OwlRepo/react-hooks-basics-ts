import { useState } from "react";
import { UseCounterContext } from "~/lib/hooks/home/useCounter";
import UseContextCounterForm from "./UseContextCounterForm";

const CounterContext = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((prevState) => prevState + 1);
  const decreaseCount = () => setCount((prevState) => prevState - 1);

  return (
    <UseCounterContext.Provider value={count}>
      <UseContextCounterForm
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </UseCounterContext.Provider>
  );
};

export default CounterContext;
