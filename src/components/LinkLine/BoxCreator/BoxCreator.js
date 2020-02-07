import React, {Component} from 'react'
import classes from './BoxCreator.module.css'
import Input from '../../UI/Input/Input'

class BoxCreator extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <Input />
                <Input />
                <Input />
            </div>
        )
    }
}

export default BoxCreator