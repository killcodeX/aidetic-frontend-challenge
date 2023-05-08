import React, { useReducer} from 'react';
import { StoreContext, StoreReducer, initialState  } from './StateMangement'
import Header from './Components/Header';
import Home from './Modules/Home';

function App() {
  const [state, dispatch] = useReducer(StoreReducer, initialState)
  return (
    <StoreContext.Provider value={{state, dispatch}}>
    <Header/>
    <Home/>
    </StoreContext.Provider>
  );
}

export default App;
