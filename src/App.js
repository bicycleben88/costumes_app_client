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
    //url of API
    url: "https://costumes-api.herokuapp.com", 
    //token will store jwt after user logs in
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
  const [foundCostume, setFoundCostume] = React.useState(blankCostume)
  const [costumes, setCostumes] = React.useState(null)

  //Get Costumes from mongoDB
  const getCostumes = async () => {
      //Make API call
      const response = await fetch(`${globalState.url}/costumes`, {
          headers: {
              Authorization: `bearer ${globalState.token}`
          }
      });
      //Convert API info into json 
      const data = await response.json();
      //Set State with json Data
      await setCostumes(data);
  }
  
  //load initial state
  React.useEffect(() => {
    //get token from local storage
    const token = JSON.parse(window.localStorage.getItem("token"));
    //if there is a token in local storage
    if (token) {
      //set globalState to include the token stored in local storage
      setGlobalState({...globalState, token: token.token})
    }
  }, []);

  //Add Costume to mongoDB
  const addCostume = (costume) => {
    fetch(`${globalState.url}/costumes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${globalState.token}`
      },
      body: JSON.stringify(costume)
    })
  }
  
  //update found costume passed down from dashboard
  const findCostume = (costume) => {
    setFoundCostume(costume);
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
              findCostume={findCostume}  
              costumes={costumes} 
              getCostumes={getCostumes}
              blankCostume={blankCostume}/> : 
              <Home {...routerProps} />)} 
          />
          <Route exact path="/signup" 
            render={(routerProps => <Signup {...routerProps} />)} 
          />
          <Route exact path="/login" 
            render={(routerProps => <LogIn {...routerProps} />) } 
          />
          <Route exact path="/new" 
            render={(routerProps => <New {...routerProps} 
            blankCostume={blankCostume} 
            addCostume={addCostume} cd />)} 
          />
          <Route exact path="/change" 
            render={(routerProps => <Change {...routerProps} 
            foundCostume={foundCostume} 
            costumes={costumes} />)} 
          />
        </Switch>
      </main>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
