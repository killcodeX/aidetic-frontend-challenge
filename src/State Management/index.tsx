import { createContext, useContext } from "react";

export interface storeProps {
  users?: [];
}

// An interface for our actions
interface StoreAction {
  type: string;
  payload: any;
}

export let initialState: storeProps = {
  users: [],
};

export const StoreContext = createContext<{
  state: storeProps;
  dispatch: React.Dispatch<StoreAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const StoreReducer = (state: storeProps, action: StoreAction) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default StoreReducer;
