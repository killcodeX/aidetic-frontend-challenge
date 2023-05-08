import Item from "antd/es/list/Item";
import { createContext } from "react";

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
  updatedProfile: profileProps;
}

// An interface for our actions
interface StoreAction {
  type: string;
  payload?: any;
}

export let initialState: storeProps = {
  profiles: [],
  updatedProfile: {} as profileProps,
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
        ...state,
        profiles: [...payload],
      };

    case "FETCH_UPDATED_DATA":
      let res = state.profiles.filter((item) => item.id !== payload.id);
      return {
        ...state,
        updatedProfile: res[0],
      };
    case "DELETE_DATA":
      let profile = state.profiles.filter((item) => item.id !== payload.id);
      return {
        ...state,
        profiles: [...profile],
      };
    default:
      return state;
  }
};

export default StoreReducer;
