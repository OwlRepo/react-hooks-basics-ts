import { useContext } from "react";
import { UseCounterContext } from "~/lib/hooks/home/useCounter";
import type UseContextCounterFormProps from "~/lib/types/home/UseContextCounterFormProps";

const UseContextCounterForm = (
  props: UseContextCounterFormProps
): JSX.Element => {
  const countFromContext = useContext(UseCounterContext);

  return (
    <div className="grid min-w-full grid-cols-1 place-items-center text-white sm:grid-cols-2">
      <b>useContext</b>
      <div className="flex flex-row items-center space-x-5">
        <button onClick={props.decreaseCount} className="btn">
          -
        </button>
        <b>{countFromContext?.toString()}</b>
        <button onClick={props.increaseCount} className="btn">
          +
        </button>
      </div>
    </div>
  );
};

export default UseContextCounterForm;
