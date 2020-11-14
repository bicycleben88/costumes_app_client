import React from 'react';
import { GlobalContext } from '../App';

const New = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [items, setItems] = React.useState(null);
  const [costume, setCostume] = React.useState(props.blankCostume);

  //handle adding costume to state
  const addToCostume = (item) => {
      setCostume({...costume, [item.type]: item});
  }
  //add costume 
  const addCostume = (costume) => {
    props.addCostume(costume);
    props.history.push('/')
  }
  //handle input change
  const handleChange = (event) => {
      setCostume({...costume, [event.target.name]: event.target.value})
  }
  //Get Items
  const getItems = async () => {
    const response = await fetch(`${url}/items`);
    const data = await response.json();
    await setItems(data);
    }

  React.useEffect(() => {
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