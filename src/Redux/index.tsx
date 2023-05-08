import { AxiosResponse } from "axios";
import { createContext, useContext } from "react";

interface profileProps {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
  image_url: string;
  description: string;
}

export interface storeProps {
  profiles: profileProps[];
}

// An interface for our actions
interface StoreAction {
  type: string;
  payload?: any;
}

export let initialState: storeProps = {
  profiles: [],
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
    case "FETCH_DATA":
      return {
        profiles: [...payload],
      };
    default:
      return state;
  }
};

export default StoreReducer;
