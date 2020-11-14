import React from 'react';
import {GlobalContext} from '../App'

const Change = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const { costume } = props
  const [userCostume, setUserCostume] = React.useState(null);
  const [items, setItems] = React.useState(null);

 //Set initial state 
  React.useEffect(() => {
    const loadState = async () => {
      await getItems();
      await setUserCostume(costume)
    };
    loadState();
  }, []);

  //Get Items
  const getItems = async () => {
    const response = await fetch(`${url}/items`);
    const data = await response.json();
    await setItems(data);
  }

     //handle adding costume to state
  const addToCostume = (item) => {
    setUserCostume({...userCostume, [item.type]: item});  
  }   

  const updateCostume = (costume) => {
      props.updateCostume(costume);
      props.history.push('/');
  }
  

  const loaded = () => {  
    return (
        <div className="change-container">
          <div className="change-costume">
            <h2>Change up your costume!</h2>
            <button onClick={() => updateCostume(userCostume)}>Save Changes</button>
            <div>
              <h4>Top</h4>
            </div>
            <div>
              <h4>Bottom</h4>
            </div>
            <div>
              <h4>Accessory</h4>
              <img src={userCostume.accessory.img}  />
            </div>
          </div>
          <div className="change-all-costumes">
            <h2>Costume Items</h2>
            <div>
              <h4>Tops</h4>
            </div>
            <div>
              <h4>Bottoms</h4>
            </div>
            <div>
              <h4>Accessories</h4>
              {items.map((item) => {
                return (
                  <div key={item._id}>
                    <img src={item.img}/>
                    <button onClick={() => addToCostume(item)}>Add to Costume</button>
                  </div>
                )
              })}
            </div>
          </div> 
        </div>
    )
  }
  
  return userCostume ? loaded() : <h4>...Getting your costume</h4>
   
}

export default Change