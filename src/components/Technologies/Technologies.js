import React from 'react'
import './Technologies.scss'

import Techbox from './Techbox/Techbox'

const Technologies = props => {
    return (
        <div className='Technologies'>
            <h1 style={{
                color: 'white'
            }}>Какие-то блоки...</h1>
            <Techbox title='React'   color='darkblue' icon='React'   />
            <Techbox title='Vue'     color='green'    icon='Vue'     />
            <Techbox title='Angular' color='darkred'  icon='Angular' />
            <h1 style={{
                color: 'white'
            }}>Про технологии</h1>
        </div>
    )
}

export default Technologies