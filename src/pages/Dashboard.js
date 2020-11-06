import React from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../App';

const Dashboard = (props) => {
    //Deconstruct globalState and setGlobalState and pass into useContext
    const {globalState, setGlobalState} = React.useContext(GlobalContext);
    const {url} = globalState;
    const [costumes, setCostumes] = React.useState(null)
    //Get Costumes from mongoDB
    const getCostumes = async () => {
        //Make API call
        const response = await fetch(`${url}/items`);
        //Convert API info into json 
        const data = await response.json();
        //Set State with json Data
        setCostumes(data);
    }
    //Set initial state 
    React.useEffect(() => {
        //Make API call
        getCostumes();
    }, []);
    

    return (
        <>
           <h1>Welcome to your Dashboard</h1>
           <Link to="/new"><h2>Make a new Costume</h2></Link>
        </>
    )
}

export default Dashboard