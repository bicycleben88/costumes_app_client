import React from 'react';
import {GlobalContext} from '../App'
const New = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const {globalState, setGlobalState} = React.useContext(GlobalContext);
  const {url} = globalState;
  const [items, setItems] = React.useState(null)
  //Get costume Items from mongoDB
  const getItems = async () => {
      //Fetch costume Items
      const response = await fetch(`${url}/items`);
      //Convert API info into json 
      const data = await response.json();
      //Set State with json Data
      setItems(data);
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
              <div className="costume-items">
               <h2>Tops</h2>
               <h2>Bottoms</h2>
               <div>
                <h2>Accessories</h2>
                {
                    items.map(item => {
                        if(item.type === "accessory") {
                            return <img src={item.img} className="accessories" key={item._id}/>
                        }
                    })
                }
               </div>
              </div>
           </>
       )
    }
    return items ? loaded() : <h4>Fetching Costume Items</h4>
}

export default New