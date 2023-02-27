import { useCounter } from "~/lib/hooks/home";

const UseStateCounterForm = (): JSX.Element => {
  const [count, incrementCount, decrementCount] = useCounter();

  return (
    <div className="grid min-w-full grid-cols-1 place-items-center text-white sm:grid-cols-2">
      <b>useState</b>
      <div className="flex flex-row items-center space-x-5">
        <button onClick={decrementCount} className="btn">
          -
        </button>
        <b>{count}</b>
        <button onClick={incrementCount} className="btn">
          +
        </button>
      </div>
    </div>
  );
};

export default UseStateCounterForm;
