import React, { createContext, useState } from "react";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  let [activeCard, setActiveCard] = useState(0);
  let [activeDaysCard, setActiveDaysCard] = useState(0);
  return (
    <ContextProvider.Provider
      value={{ activeCard, setActiveCard, activeDaysCard, setActiveDaysCard }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
