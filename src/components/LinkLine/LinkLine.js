import React, {Component} from 'react'
import LinkBox from './LinkBox/LinkBox'

class LinkLine extends Component {
    state = {
        linkBoxes: [
            {
                name: 'ВКонтакте',
                url: 'vk.com',
                discription: 'ВКонтакте'
            }
        ]
    }

    render() {
        return (
            <div>
                <LinkBox 
                    name={this.state.linkBoxes[0].name}
                    url={this.linkBoxes[0].state.url}
                    discription={this.state.linkBoxes[0].discription}
                />
            </div>
        )
    }
}

export default LinkLine