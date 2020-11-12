import React from 'react';

const New = (props) => {
  const [items, setItems] = React.useState(null);
  const [costume, setCostume] = React.useState(props.blankCostume);
  const { getItems } = props

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
  //Set initial state 
  React.useEffect(async () => {
     const data =  await getItems();
     await setItems(data);
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