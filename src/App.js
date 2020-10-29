import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Signup from './pages/Signup';
import LogIn from './pages/Login';
import { Switch, Link, Route } from 'react-router';

export const GlobalContext = React.createContext(null);


function App() {
  //Create global state for multiple components to use
  const [globalState, setGlobalState] = React.useState({
    //url of API
    url: "http://localhost:4500", 
    //token will store jwt after user logs in
    token: null
  });

  //load initial state
  React.useEffect(() => {
    //get token from local storage
    const token = JSON.parse(window.localStorage.getItem("token"));
    console.log(token);
    //if there is a token in local storage
    if (token) {
      //set globalState to include the token stored in local storage
      setGlobalState({...globalState, token: token.token})
    }
  }, []);

  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
    <div className="App">
      <Header />
      <main>  
        <Switch>
          <Route exact path="/" render={(routerProps => <h1>Home</h1>)} />
          <Route exact path="/signup" render={(routerProps => <Signup {...routerProps} />)} />
          <Route exact path="/login" render={(routerProps => <LogIn {...routerProps} />) } />
          <Route exact path="/dashboard" render={(routerProps => <h1>Dashboard</h1>)} />
        </Switch>
      </main>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
