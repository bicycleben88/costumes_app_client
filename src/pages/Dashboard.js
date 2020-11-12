import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
    const { getCostumes } = props
    const [userCostumes, setUserCostumes] = React.useState(null)

    React.useEffect(async () => {
       const data = await getCostumes();
       await setUserCostumes(data);
    }, []);
    

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