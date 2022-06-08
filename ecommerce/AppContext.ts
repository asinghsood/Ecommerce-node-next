import React from "react";

const defaultValue = {
  state: {
    cartItemCount: 1,
  },
  setCount: (id: number) => {},
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
