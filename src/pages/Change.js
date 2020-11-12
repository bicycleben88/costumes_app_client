import React from 'react';
const Change = (props) => {
  const { costume } = props
  const [userCostume, setUserCostume] = React.useState(costume)
  console.log(userCostume)
  const loaded = () => {  
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
              {/* <img src={userCostume.accessory.img}  /> */}
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
  
  return userCostume ? loaded() : <h4>...Getting your costume</h4>
   
}

export default Change