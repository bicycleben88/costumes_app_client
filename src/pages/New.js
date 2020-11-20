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
    props.history.push('/');
  }
  //handle input change
  const handleChange = (event) => {
      setCostume({...costume, [event.target.name]: event.target.value});
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
              <h1 className="dashboard-header">Create a new Costume</h1>
              <h2 
                onClick={() => addCostume(costume)}
                className="dashboard-h2">
                Add Costume
              </h2>
              <div className="costume-items">
                <div className="new-items">
                  <h2>Your Costume! </h2>
                    <input 
                        name="name"
                        type="text" 
                        value={costume.name}
                        placeholder="Costume Name"
                        onChange={handleChange}
                    />
                  <div>
                    <h4>Accessory</h4>
                    {costume.accessory ? 
                      <img src={costume.accessory.img} className="accessories" /> : 
                      null }
                  </div>
                  <div>
                    <h4>Top</h4>
                    {costume.top ? 
                      <img src={costume.top.img} className="tops" /> : 
                      null }
                  </div>
                  <div>
                    <h4>Bottom</h4>
                    {costume.bottom ? 
                      <img src={costume.bottom.img} className="bottoms" /> : 
                      null }
                  </div>
                </div>
                <div className="new-items">
                    <h2>Tops</h2>
                    {items.map(item => {
                        if(item.type === "top") {
                            return ( 
                                <div className="item">
                                    <img src={item.img} className="tops" key={item._id}/>
                                    <button 
                                      onClick={() => addToCostume(item)}
                                      className="dashboard-button">
                                      Add to Costume
                                    </button>
                                </div>
                            )}
                    })}
                </div>
                <div className="new-items">
                    <h2>Bottoms</h2>
                    {items.map(item => {
                        if(item.type === "bottom") {
                            return ( 
                                <div className="item">
                                    <img src={item.img} className="bottoms" key={item._id}/>
                                    <button 
                                      onClick={() => addToCostume(item)}
                                      className="dashboard-button">
                                      Add to Costume
                                    </button>
                                </div>
                            )}
                    })}
                </div>
                <div className="new-items">
                    <h2>Accessories</h2>
                    {items.map(item => {
                        if(item.type === "accessory") {
                            return ( 
                                <div className="item">
                                    <img src={item.img} className="accessories" key={item._id}/>
                                    <button 
                                      onClick={() => addToCostume(item)}
                                      className="dashboard-button">
                                      Add to Costume
                                    </button>
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