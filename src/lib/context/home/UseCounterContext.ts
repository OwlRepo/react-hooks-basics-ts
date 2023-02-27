import { createContext } from "react";

const countDefaultValue = 0;

export const UseCounterContext = createContext<number>(countDefaultValue);
