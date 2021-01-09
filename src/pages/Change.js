import React from "react";
import { GlobalContext } from "../App";
import Costume from "../components/Costume";
import Item from "../components/Item";

const Change = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const { costume } = props;
  const [userCostume, setUserCostume] = React.useState(null);
  const [items, setItems] = React.useState(null);

  const getItems = async () => {
    const response = await fetch(`${url}/items`);
    const data = await response.json();
    await setItems(data);
  };

  const addToCostume = (item) => {
    setUserCostume({ ...userCostume, [item.type]: item });
  };

  const updateCostume = (costume) => {
    props.updateCostume(costume);
    props.history.push("/");
  };

  React.useEffect(() => {
    const loadState = async () => {
      await getItems();
      await setUserCostume(costume);
    };
    loadState();
  }, []);

  const loaded = () => {
    return (
      <section className="change-container">
        <h2 onClick={() => updateCostume(userCostume)}>Edit Costume</h2>
        <article className="change">
          <div className="user-costume">
            <h2>{userCostume.name} </h2>
            <Costume costume={userCostume} />
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

  return userCostume ? loaded() : <h4>...Getting your costume</h4>;
};

export default Change;
