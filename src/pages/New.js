import React from "react";
import { GlobalContext } from "../App";
import Costume from "../components/Costume";
import Item from "../components/Item";

const New = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [items, setItems] = React.useState(null);
  const [costume, setCostume] = React.useState(props.blankCostume);

  //handle adding costume to state
  const addToCostume = (item) => {
    setCostume({ ...costume, [item.type]: item });
  };
  //add costume
  const addCostume = (costume) => {
    props.addCostume(costume);
    props.history.push("/");
  };
  //handle input change
  const handleChange = (event) => {
    setCostume({ ...costume, [event.target.name]: event.target.value });
  };
  //Get Items
  const getItems = async () => {
    const response = await fetch(`${url}/items`);
    const data = await response.json();
    await setItems(data);
  };
  React.useEffect(() => {
    getItems();
  }, []);

  const loaded = () => {
    return (
      <section className="new-container">
        <h2 onClick={() => addCostume(costume)}>Add Costume</h2>
        <article className="new">
          <div className="new-costume">
            <h2>Your Costume! </h2>
            <input
              name="name"
              type="text"
              value={costume.name}
              placeholder="Costume Name"
              onChange={handleChange}
            />
            <Costume costume={costume} />
          </div>
          <div className="items-container">
            <h2>Tops</h2>
            {items.map((item) => {
              if (item.type === "top") {
                return <Item item={item} addToCostume={addToCostume} />;
              }
            })}
          </div>
          <div className="items-container">
            <h2>Bottoms</h2>
            {items.map((item) => {
              if (item.type === "bottom") {
                return <Item item={item} addToCostume={addToCostume} />;
              }
            })}
          </div>
          <div className="items-container">
            <h2>Accessories</h2>
            {items.map((item) => {
              if (item.type === "accessory") {
                return <Item item={item} addToCostume={addToCostume} />;
              }
            })}
          </div>
        </article>
      </section>
    );
  };
  return items ? loaded() : <h4>Fetching Costume Items</h4>;
};

export default New;
