import { useFetch } from "~/lib/hooks/home";

const UseEffectDataFetch = (): JSX.Element => {
  const [apiResponse] = useFetch();

  return (
    <div className="grid min-w-full grid-cols-1 place-items-center text-white sm:grid-cols-2">
      <b>useEffect</b>
      <div className="flex flex-row items-center space-x-5">
        <p
          className={`rounded ${
            apiResponse?.fetching ? "bg-amber-400" : "bg-slate-600"
          } p-3`}
        >
          {apiResponse?.fetching
            ? "Fetching Data..."
            : `${JSON.stringify(apiResponse?.data)}`}
        </p>
      </div>
    </div>
  );
};

export default UseEffectDataFetch;
