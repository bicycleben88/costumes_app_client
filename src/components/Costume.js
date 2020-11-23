import React from 'react';

const Costume = (props) => {
    const { costume } = props
    return (
        <div>
            <h4>Accessory</h4>
            {costume.accessory ? <img src={costume.accessory.img} /> : null}
            <h4>Top</h4>
            {costume.top ? <img src={costume.top.img} /> : null}
            <h4>Bottom</h4>
            {costume.bottom ? <img src={costume.bottom.img} /> : null}
        </div>
    )
}

export default Costume
