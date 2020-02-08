import React from 'react'
import './Techbox.scss'

const Techbox = props => {
    let iconClass = ''
    switch (props.icon) {
        case 'Angular':
            iconClass = 'fab fa-angular'
        break
        case 'React':
            iconClass = 'fab fa-react'
        break
        case 'Vue':
            iconClass = 'fab fa-vuejs'
        break
        default:
            iconClass = 'fas fa-angle-double-right'
        break
    }


    return (
        <div className='Techbox'>
            <div className={props.color}
                 style={{
                     width: '50%',
                     textAlign: 'left',
                     cursor: 'pointer'
                 }}>
                <h2>{props.title}</h2>
            </div>

            <div style={{
                textAlign: 'left',
                width: '30%'
            }}>
                <p>Это {props.title}, крутая технология!</p>
            </div>

            <div className={props.color}
                 style={{
                width: '5%', cursor: 'pointer'
            }}>
                <i className={iconClass}></i>
            </div>
        </div>
    )
}

export default Techbox