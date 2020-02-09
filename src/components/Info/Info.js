import React from 'react'
import './Info.scss'

import Button from '../UI/Button/Button'

const Info = props => {
    return(
        <div className='Info'>
            <div className='InfoDialog'>
                <h1>Я пытался переизобрести калькулятор</h1>
                <p>Этот калькулятор должен был стать <strong>вершиной</strong> развития калькуляторов</p>
                <p>Но в какой-то момент всё пошло не по плану...</p>
                <p>В нём могло бы быть идеально всё</p>
                <p>Но, скорее всего, он так и не доживёт до релиза</p>
                <Button type='main' onClick={() => {
                    props.closeInfo()
                }}>Понял, принял</Button>
            </div>
        </div>
    )
}

export default Info