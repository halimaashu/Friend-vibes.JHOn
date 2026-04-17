"use client";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [remember, setRemember] = useState([]);
  return (
    <Context.Provider value={[remember, setRemember]}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
