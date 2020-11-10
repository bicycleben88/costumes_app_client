import React from 'react';
import {GlobalContext} from '../App'
const Change = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const {globalState, setGlobalState} = React.useContext(GlobalContext);
  const {url} = globalState;
  console.log(props.foundCostume)
    
        return (
            <h2>Change up your costume!</h2>
        )
   
}

export default Change