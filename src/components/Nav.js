import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Nav = (props) => {
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
    <nav>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      {globalState.token ? logOut : null}
      <Link to="/">Costumes</Link>
      <Link to="/draw">Draw a Picture</Link>
    </nav>
  );
};

export default Nav;
