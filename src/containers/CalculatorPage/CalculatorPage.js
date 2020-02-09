import React, {Component} from 'react'
import './CalculatorPage.scss'

import Calculator from '../../components/Calculator/Calculator'
import Info from '../../components/Info/Info'

export default class CalculatorPage extends Component {
    state = {
        infoOpen: true
    }
    render() {
        return(
            <div className='CalculatorPage'>

                {this.state.infoOpen ? <Info closeInfo={() => this.setState({
                    infoOpen: false
                })}/> : null}
                
                <h1>Калькулятор</h1>

                <Calculator />

                <div className='SqrtIcon' onClick={() => {
                    this.setState({infoOpen: true})
                }}>
                    <i className='fas fa-square-root-alt' style={{
                        margin: 30,
                        fontSize: 75
                    }}></i>
                </div>
            </div>
        )
    }
}