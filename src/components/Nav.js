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
      {!globalState.token ? <Link to="/signup">Sign Up</Link> : null}
      {!globalState.token ? <Link to="/login">Log In</Link> : null}
      {globalState.token ? logOut : null}
      <Link to="/">Costumes</Link>
      <Link to="/draw">Draw a Picture</Link>
      <div className="contact">
        <a href="https://higginbotham.fun" target="#">
          Portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
          target="#"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Nav;
