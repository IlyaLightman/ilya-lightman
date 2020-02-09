/* eslint-disable no-eval */
import React, {Component} from 'react'
import './Calculator.scss'

import CalcButton from './CalcButton/CalcButton'

class Calculator extends Component {
    state = {
        math: '7 + 16 / 2',
        answer: 15,
        title: '',
        isMath: true
    }

    calculateMath = () => {
        let answer = this.state.answer

        // expression = expression.trim()
 
        try {
            answer = eval(this.state.math.trim())
        } catch (err) {
            console.log('its ok')
        }

        this.setState({
            answer
        })
    }

    componentDidMount() {
        this.setState({
            title: this.state.answer
        })
    }

    returnClickHandler = () => {
        this.state.isMath
            ? this.setState
                ({title: this.state.math,
                  isMath: !this.state.isMath}) 
            : this.setState
                ({title: this.state.answer,
                  isMath: !this.state.isMath})
    }

    addOperator = operator => {
        const newMath = this.state.math + ' ' + operator

        this.setState({
            math: newMath,
            isMath: false,
            title: newMath
        })

        this.calculateMath()
    }

    clearAll = () => {
        this.setState({
            math: '0',
            title: 'CLEARED',
            answer: 0,
            isMath: false
        })
    }

    render() {
        return(
            <div className='Calculator'>
                {/* // ? Нажать на эту кнопку и получить ответ, а текст в ней - набранное выражение */}

                <div className='return'>
                    <CalcButton 
                        title={this.state.title}
                        
                        onClick = {() => this.returnClickHandler()}
                    />
                    {/* <CalcReturn /> */}
                </div>

                <div style={{width: 100}}>
                    <CalcButton title='X'
                        onClick = {() => this.addOperator('*')}
                    />
                </div>
                
                <CalcButton title='/'
                    onClick = {() => this.addOperator('/')}
                />
                
                <div style={{
                    gridRow: 2,
                    gridColumnStart: 3,
                    gridColumnEnd: 5
                }}
                    onClick = {() => this.clearAll()}
                >
                    <CalcButton title='CLEAR'/>
                </div>

                <div style={{
                    gridRowStart: 3,
                    gridRowEnd: 5,
                    gridColumn: 4
                }}>
                    <CalcButton title='+' h='134px'
                        onClick = {() => this.addOperator('+')}
                    />
                </div>

                <div style={{
                    gridRowStart: 5,
                    gridRowEnd: 7,
                    gridColumn: 4
                }}>
                    <CalcButton title='=' h='134px'
                        onClick = {() => {this.addOperator('=')}}
                    />
                </div>

                <CalcButton title='7'
                    onClick = {() => this.addOperator(7)}
                />
                <CalcButton title='8'
                    onClick = {() => this.addOperator(8)}
                />
                <CalcButton title='9'
                    onClick = {() => this.addOperator(9)}
                />

                <CalcButton title='4'
                    onClick = {() => this.addOperator(4)}
                />
                <CalcButton title='5'
                    onClick = {() => this.addOperator(5)}
                />
                <CalcButton title='6'
                    onClick = {() => this.addOperator(6)}
                />

                <CalcButton title='1'
                    onClick = {() => this.addOperator(1)}
                />
                <CalcButton title='2'
                    onClick = {() => this.addOperator(2)}
                />
                <CalcButton title='3'
                    onClick = {() => this.addOperator(3)}
                />

                <CalcButton title='-'
                    onClick = {() => this.addOperator('-')}
                />
                <CalcButton title='0'
                    onClick = {() => this.addOperator(0)}
                />
                <CalcButton title=','
                    onClick = {() => this.addOperator(',')}
                />
            </div>
        )
    }
}

export default Calculator