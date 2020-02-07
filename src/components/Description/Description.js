import React from 'react'
import './Description.scss'

const Description = props => {
    return (
        <div className={'Description'}>
            <p>
                { props.text }
            </p>
            <p>
                А это сайт, созданный с помощью <strong>React</strong>
            </p>
            <p>
                Добро пожаловать!
            </p>
        </div>
    )
}

export default Description