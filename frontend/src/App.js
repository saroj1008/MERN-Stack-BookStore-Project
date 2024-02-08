import { useState } from 'react';
import './App.css';
import AppRoute from './navigation/AppRoute';
import LoggedInUserContext from './context-global/LoggedInUserContext';

function App() {
  // Save loggedInUser value in local storage to get it when the page is reloaded or revisited
  // Use useState hook to manage the loggedInUser state and initialize it with the value retrieved from local storage,
  // or null if there is no such data in the local storage.
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('LoggedInUserInfo')) || null);

  return (
    <div className="App">
      <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <AppRoute />
      </LoggedInUserContext.Provider>
    </div>
  );
}

export default App;
