import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Signup from './pages/Signup';
import LogIn from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Change from './pages/Change'
import New from './pages/New'
import { Switch, Link, Route } from 'react-router';

export const GlobalContext = React.createContext(null);


function App() {
  //Create global state for multiple components to use
  const [globalState, setGlobalState] = React.useState({
    url: "https://costumes-api.herokuapp.com", 
    token: null
  });

  //create blank costume to send to new and change page for their states
  const blankCostume = {
    top: null, 
    bottom: null, 
    accessory: null,
    name: null
  }

  //create found costume to send to change page
  const [foundCostume, setFoundCostume] = React.useState(blankCostume);
  
  // update found costume passed down from dashboard
  const findCostume = (costume) => {
    setFoundCostume(costume);
  }
  
  //Change state when user logs on/off
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGlobalState({...globalState, token: token.token})
    }
  }, []);

  // Add Costume 
  const addCostume = (costume) => {
    fetch(`${globalState.url}/costumes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${globalState.token}`
      },
      body: JSON.stringify(costume)
    });
  }
  
  //Update Costume 
  const updateCostume = (costume) => {
    console.log(costume);
    fetch(`${globalState.url}/costumes/${costume._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${globalState.token}`
      },
      body: JSON.stringify(costume) 
    });
  }
  
  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
    <div className="App">
      <Header />
      <main>  
        <Switch>
          <Route exact path="/" 
            render={(routerProps => globalState.token ? 
              <Dashboard {...routerProps} 
              blankCostume={blankCostume}
              findCostume={findCostume} /> : 
              <Home {...routerProps} />)} 
          />
          <Route exact path="/signup" 
            render={(routerProps => 
            <Signup {...routerProps} />)} 
          />
          <Route exact path="/login" 
            render={(routerProps => 
            <LogIn {...routerProps} />) } 
          />
          <Route exact path="/new" 
            render={(routerProps => 
            <New {...routerProps} 
              blankCostume={blankCostume} 
              addCostume={addCostume} />)} 
          />
          <Route exact path="/change" 
            render={(routerProps => 
            <Change {...routerProps} 
              costume={foundCostume}  
              updateCostume={updateCostume} />)} 
          />
        </Switch>
      </main>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
