import React, {Component} from 'react'
import './CalculatorPage.scss'

import Calculator from '../../components/Calculator/Calculator'
import { withRouter } from 'react-router-dom'

export default class CalculatorPage extends Component {

    render() {
        return(
            <div className='CalculatorPage'>
                <h1>Калькулятор</h1>

                <Calculator />


                <div>
                <i className="fas fa-calculator" style={{
                    color: 'rgba(255, 255, 255, .5)',
                    margin: 30,
                    fontSize: 75
                }}></i>
                <i className='fas fa-square-root-alt' style={{
                    color: 'rgba(255, 255, 255, .5)',
                    margin: 30,
                    fontSize: 75
                }}></i>
                <i className="fas fa-calculator" style={{
                    color: 'rgba(255, 255, 255, .5)',
                    margin: 30,
                    fontSize: 75
                }}></i>
                </div>
                {/* <i className="fas fa-calculator" style={{
                    color: 'white',
                    margin: 30,
                    fontSize: 75
                }}></i> */}
            </div>
        )
    }
}