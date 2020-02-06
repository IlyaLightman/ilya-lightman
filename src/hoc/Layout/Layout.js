import React, {Component} from 'react'
import './Layout.scss'

export default class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return(
            <div className='Layout'>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}