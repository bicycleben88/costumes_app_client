import React from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../App';
import Costume from '../components/Costume'

const Dashboard = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { url, token } = globalState;
    
    const [userCostumes, setUserCostumes] = React.useState(null)
    
    React.useEffect(() => {
        getCostumes();
    },[]
    )
    //Get Costumes 
    const getCostumes = async () => {
        const response = await fetch(`${url}/costumes`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        });
        const data = await response.json();
        setUserCostumes(data)
    }

    //Delete Costume
    const deleteCostume = (costume) => {
        fetch(`${url}/costumes/${costume._id}`, {
            method: "DELETE",
            headers: {
                Authorization:  `bearer ${token}`
            }
        }).then(() => {
            getCostumes();
        });
    }
    
    const loaded = () => {
        return (
           <>
              <h1 className="banner-header">Welcome to your Dashboard</h1>
              <Link to="/new"><h2 className="dashboard-h2">Make a new Costume</h2></Link>
              <div className="dashboard-container">
                   {userCostumes.map((costume) => {
                       return(
                           <div key={costume._id} className="costume-container">
                                <button 
                                    onClick={() => {
                                    props.findCostume(costume)
                                    props.history.push("/change")}}
                                    className ="dashboard-button">
                                    Make Changes
                                </button>
                                <h3>{costume.name}</h3>
                                <Costume costume={costume} />
                                <button 
                                    onClick={() => deleteCostume(costume)} 
                                    className ="dashboard-button"> 
                                    Delete 
                                </button>
                           </div>
                       )
                   })}
              </div>
           </>
       )
    }

    return userCostumes ? loaded() : <h4>...Getting Your Costumes</h4>
}

export default Dashboard