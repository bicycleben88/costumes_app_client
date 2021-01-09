import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Aside from "./components/Aside";
import Signup from "./pages/Signup";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Change from "./pages/Change";
import New from "./pages/New";

export const GlobalContext = React.createContext(null);

function App() {
  const [globalState, setGlobalState] = React.useState({
    url: "https://costumes-api.herokuapp.com",
    token: null,
  });
  const blankCostume = {
    top: null,
    bottom: null,
    accessory: null,
    name: null,
  };
  const [foundCostume, setFoundCostume] = React.useState(blankCostume);

  const findCostume = (costume) => {
    setFoundCostume(costume);
  };

  const addCostume = (costume) => {
    fetch(`${globalState.url}/costumes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${globalState.token}`,
      },
      body: JSON.stringify(costume),
    });
  };

  const updateCostume = (costume) => {
    fetch(`${globalState.url}/costumes/${costume._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${globalState.token}`,
      },
      body: JSON.stringify(costume),
    });
  };

  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGlobalState({ ...globalState, token: token.token });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <div className="App">
        <header>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="nav-header">Costume Collector</h1>
          </Link>
        </header>
        <body className="app-body">
          <Aside />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={(routerProps) =>
                  globalState.token ? (
                    <Dashboard {...routerProps} findCostume={findCostume} />
                  ) : (
                    <Home {...routerProps} />
                  )
                }
              />
              <Route
                exact
                path="/signup"
                render={(routerProps) => <Signup {...routerProps} />}
              />
              <Route
                exact
                path="/login"
                render={(routerProps) => <LogIn {...routerProps} />}
              />
              <Route
                exact
                path="/new"
                render={(routerProps) => (
                  <New
                    {...routerProps}
                    blankCostume={blankCostume}
                    addCostume={addCostume}
                  />
                )}
              />
              <Route
                exact
                path="/change"
                render={(routerProps) => (
                  <Change
                    {...routerProps}
                    costume={foundCostume}
                    updateCostume={updateCostume}
                  />
                )}
              />
            </Switch>
          </main>
        </body>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
