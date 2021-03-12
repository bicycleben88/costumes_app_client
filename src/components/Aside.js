import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Aside = (props) => {
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
    <aside>
      <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        {globalState.token ? logOut : null}
        <Link to="/">Costumes</Link>
        <Link to="/draw">Draw a Picture</Link>
      </nav>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
          target="#"
        >
          /in
        </a>
        <a
          href="https://github.com/bicycleben88/costumes_app_client"
          target="#"
        >
          Git
        </a>
        <a href="https://my-portfolio-swart-rho.vercel.app/" target="#">
          Folio
        </a>
      </div>
    </aside>
  );
};

export default Aside;
