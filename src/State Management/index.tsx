import { createContext, useContext } from "react";

interface storeProps {
  users: [];
}

// An interface for our actions
interface StoreAction {
  type: string;
  payload: any;
}

let initialState: storeProps = {
  users: [],
};

export const StoreContext = createContext(initialState);

const StoreReducer = (state: storeProps, action: StoreAction) => {
  const { type, payload } = action;

  switch (type) {
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default StoreReducer;
