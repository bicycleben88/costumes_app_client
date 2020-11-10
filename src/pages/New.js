import React from 'react';
import {GlobalContext} from '../App'
const New = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const {globalState, setGlobalState} = React.useContext(GlobalContext);
  const {url} = globalState;
  //Define state and setState for costume items
  const [items, setItems] = React.useState(null);
  //Define state and setState for costume taken from app.js as props
  const [costume, setCostume] = React.useState(props.blankCostume);
  //Get costume Items from mongoDB
  const getItems = async () => {
      //Fetch costume Items
      const response = await fetch(`${url}/items`);
      //Convert API info into json 
      const data = await response.json();
      //Set State with json Data
      setItems(data);
  }
  //handle adding costume to state
  const addToCostume = (item) => {
      setCostume({...costume, [item.type]: item});
  }
  //add costume 
  const addCostume = (costume) => {
    //use function from app.js
    props.addCostume(costume);
    //return to dashboard page
    props.history.push('/')
  }
  //handle input change
  const handleChange = (event) => {
      setCostume({...costume, [event.target.name]: event.target.value})
  }
  //Set initial state 
  React.useEffect(() => {
      //Make API call
      getItems();
  }, []);
    const loaded = () => {
        return (
           <>
              <h1>Create a new Costume</h1>
              <button 
                onClick={() => addCostume(costume)}>
                Add Costume
            </button>
              <div className="costume-items">
                <div>
                    <h2>Name</h2>
                    <input 
                        name="name"
                        type="text" 
                        value={costume.name}
                        placeholder="Costume Name"
                        onChange={handleChange}
                    />
                </div>
                <h2>Tops</h2>
                <h2>Bottoms</h2>
                <div>
                    <h2>Accessories</h2>
                    {items.map(item => {
                        if(item.type === "accessory") {
                            return ( 
                                <div>
                                    <img src={item.img} className="accessories" key={item._id}/>
                                    <button onClick={() => addToCostume(item)}>Add to Costume</button>
                                </div>
                            )}
                    })}
                </div>
              </div>
           </>
       )
    }
    return items ? loaded() : <h4>Fetching Costume Items</h4>
}

export default New