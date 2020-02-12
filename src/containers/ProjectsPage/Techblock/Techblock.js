import React from 'react'
import Radium from 'radium'

const Techblock = props => {
    const style = {
        border: '1px solid black',
        background: props.background,
        padding: '5px 25px 25px 25px',
        margin: 20,
        borderRadius: 7,
        transition: 'background 1s',
        width: `${props.width}vw`,
        ':hover': {
            background: props.color,
            cursor: 'pointer'
        }
    }

    return (
        <div style={style}>
            <div>
                <h2>{props.title}</h2>
                <p>{props.discription}</p>
                <p>{props.url}</p>
            </div>
            <div>
                <i style={{fontSize: 35}} className={props.logo}></i>
            </div>
        </div>
        
    )
}

export default Radium(Techblock)