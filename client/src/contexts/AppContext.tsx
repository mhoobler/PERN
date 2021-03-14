import { FC, createContext, useReducer, Dispatch } from "react";
import AppReducer from "./AppReducer";

const initState = {
  filters: {
    0: {
      id: 0,
      name: "",
      description: "",
      tags: [],
    },
  },
};

//Context factory?
const AppContext = createContext<{
  state: AppContextType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initState,
  dispatch: () => {},
});
const { Provider } = AppContext;

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppProvider, AppContext };
