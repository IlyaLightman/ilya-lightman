import React from 'react'
import './CalcButton.scss'

// ? title - текст, w - ширина, h - высота

const CalcButton = props => {
    return(
        <div className='CalcButton' style={{
            width: props.w,
            height: props.h
        }} onClick={props.onClick}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default CalcButton