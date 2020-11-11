import React from 'react';
import {GlobalContext} from '../App'
const Change = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const {globalState, setGlobalState} = React.useContext(GlobalContext);
  const {url} = globalState;
  const { foundCostume } = props
  const [userCostume, setUserCostume] = React.useState(foundCostume)
        return (
            <div className="change-container">
              <div className="change-costume">
                <h2>Change up your costume!</h2>
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
                </div>
              </div> 
            </div>
        )
   
}

export default Change