import React from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../App';

const Dashboard = (props) => {
    //Deconstruct globalState and setGlobalState and pass into useContext
    const {globalState, setGlobalState} = React.useContext(GlobalContext);
    const {url} = globalState;


    return (
        <>
           <h1>Welcome to your Dashboard</h1>
        </>
    )
}

export default Dashboard