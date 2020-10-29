import React from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../App'

const Header = (props) => {
    //Deconstruct globalState and setGlobalState and pass into useContext
    const {globalState, setGlobalState} = React.useContext(GlobalContext);

    //log out button with click event
    const logOut = (
        <Link onClick={() => {
            //remove token saved in local storage
            window.localStorage.removeItem("token");
            //setGlobalState token to null;
            setGlobalState({...globalState, token: null})
        }}>Log Out</Link>
    )

    return (
        <>
            <nav>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                {/* if there's token in local storage then render log out button */}
                {globalState.token ? logOut : null}
            </nav>
        </>
    )
}

export default Header