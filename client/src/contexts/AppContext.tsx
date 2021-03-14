import {FC, createContext, useReducer} from "react";

//Context factory?
const AppContext = createContext<AppContextType>({
  filters: [],
  todoContainers: []
});
const {Provider} = AppContext;

const AppProvider: FC = ({ children }) => {

  return <Provider value={{ filters: [], todoContainers: [] }}>{children}</Provider>
}

export {AppProvider, AppContext};
