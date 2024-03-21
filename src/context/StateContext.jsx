import React ,{ createContext, useContext, useEffect, useReducer } from "react";
import { initialState } from "./initialState";
import { SateReducer } from "./reducer";

export const StateContext = createContext(initialState);

export const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SateReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <StateContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext)