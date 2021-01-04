import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Header = (props) => {
  //Destructure globalState and setGlobalState and pass into useContext
  const { globalState, setGlobalState } = React.useContext(GlobalContext);

  //log out button with click event
  const logOut = (
    <Link
      to="/"
      onClick={() => {
        window.localStorage.removeItem("token");
        setGlobalState({ ...globalState, token: null });
      }}
    >
      Log Out
    </Link>
  );

  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="nav-header">Costume Collector</h1>
      </Link>
      {/* <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        {globalState.token ? logOut : null}
      </nav> */}
    </header>
  );
};

export default Header;
