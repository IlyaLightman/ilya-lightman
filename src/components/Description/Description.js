import React from 'react'
import './Description.scss'

const Description = props => {
    return (
        <div className={'Description'}>
            <p>
                { props.text }
            </p>
        </div>
    )
}

export default Description