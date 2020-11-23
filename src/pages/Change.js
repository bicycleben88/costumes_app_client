import React from 'react';
import {GlobalContext} from '../App'
import Costume from '../components/Costume'
import Item from '../components/Item'

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
        <div>
          <h2>Change up your costume!</h2>
          <button onClick={() => updateCostume(userCostume)}>Save Changes</button>
          <div className="change-costume">
            <div className="costume-container">
              <h2>Your Costume! </h2>
              <Costume costume={userCostume} />
            </div>
            <div className="new-items">
                <h2>Tops</h2>
                {items.map(item => {
                    if(item.type === "top") {
                        return <Item item={item} addToCostume={addToCostume} />
                    }
                })}
            </div>
            <div className="new-items">
                <h2>Bottoms</h2>
                {items.map(item => {
                    if(item.type === "bottom") {
                        return <Item item={item} addToCostume={addToCostume} />
                    }
                })}
            </div>
            <div className="new-items">
                <h2>Accessories</h2>
                {items.map(item => {
                    if(item.type === "accessory") {
                        return <Item item={item} addToCostume={addToCostume} />
                    }
                })}
            </div>
          </div>
        </div>
    )
  }
  
  return userCostume ? loaded() : <h4>...Getting your costume</h4>
   
}

export default Change