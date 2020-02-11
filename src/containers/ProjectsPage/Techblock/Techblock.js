import React from 'react'
import Radium from 'radium'

const Techblock = props => {
    const style = {
        border: '1px solid black',
        background: 'white',
        padding: 25,
        margin: 20,
        borderRadius: 7,
        transition: '1s',
        ':hover': {
            background: 'pink'
        }
    }

    return (
        <div style={style}>
            <h2>{props.title}</h2>
            <p>{props.discription}</p>
            <p>{props.url}</p>
        </div>
    )
}

export default Radium(Techblock)