import React from 'react'
import './LinkBox.scss'

const LinkBox = props => {
    return (
        <div className='Box' style={{
            marginTop: 75
        }}>
            <h2>{ props.name }</h2>
            <p>{ props.discription }</p>
            <p style={{
                color: 'darkblue'
            }}>{ props.url }</p>
        </div>
    )
}

export default LinkBox