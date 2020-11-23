import React from 'react'

const Item = (props) => {
    const { item } = props
    return (
        <div>
            <img src={item.img} />
            <button onClick={() => props.addToCostume(item)}>Add To Costume</button>
        </div>
    )
}

export default Item 