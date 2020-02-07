import React, {Component} from 'react'
import classes from './BoxCreator.module.css'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

class BoxCreator extends Component {
    state = {
        invalidValues: false,
        touched: false,
        currentBox: {
            name: 'hi',
            discription: '',
            url: ''
        }
    }

    changeHandler = (event, name) => {
        const currBox = {...this.state.currentBox}
        let invalidValues = this.state.invalidValues

        currBox[name] = event.target.value

        if (currBox.name.length !== 0 &
            currBox.discription.length !== 0 &
            currBox.url.length !== 0)
        {
            invalidValues = false
        }

        if(this.state.touched & currBox[name].length === 0) {
            invalidValues = true
        }

        this.setState({
            invalidValues,
            currentBox: currBox,
            touched: true
        })
    }

    boxCreator = () => {
        const currBox = {...this.state.currentBox}

        if (currBox.invalidValues) {
            return
        }

        if (currBox.name.length === 0 ||
            currBox.discription.length === 0 ||
            currBox.url.length === 0)
        {
            this.setState({
                invalidValues: true
            })
            return
        }

        this.setState({
            currentBox: {
                name: '', discription: '', url: ''
            }
        })

        this.props.AddBox(currBox)
    }

    render() {
        return(
            <div className={classes.BoxCreator}>
                <Input 
                    type='text'
                    invalid = {this.state.invalidValues}
                    title='Введите название: '
                    value={this.state.currentBox.name}
                    onChange={event => {
                        this.changeHandler(event, 'name')
                    }}  
                />
                <Input
                    invalid = {this.state.invalidValues}
                    title='Введите описание: '
                    value={this.state.currentBox.discription} 
                    onChange={event => {
                        this.changeHandler(event, 'discription')
                    }}   
                />
                <Input 
                    title='Введите URL: '
                    invalid = {this.state.invalidValues}
                    value={this.state.currentBox.url}
                    onChange={event => {
                        this.changeHandler(event, 'url')
                    }}  
                />
                <Button 
                    type='main'
                    onClick={this.boxCreator}
                >Создать</Button>
            </div>
        )
    }
}

export default BoxCreator