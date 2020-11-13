import React from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../App';

const Dashboard = (props) => {
    const {globalState, setGlobalState} = React.useContext(GlobalContext);
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

    const loaded = () => {
        return (
           <>
              <h1>Welcome to your Dashboard</h1>
              <Link to="/new"><h2>Make a new Costume</h2></Link>
              <div>
                   {userCostumes.map((costume) => {
                       return(
                           <div key={costume._id} className="dashboard-costume">
                                <button 
                                onClick={() => {
                                    props.findCostume(costume)
                                    props.history.push("/change")}}>
                                    Make Changes?
                                </button>
                                <h3>{costume.name}</h3>
                                <img src={costume.accessory.img} />
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