import React, { Component } from 'react';
import LinkBox from './LinkBox/LinkBox';
import './LinkLine.scss';
import Button from '../UI/Button/Button';
import BoxCreator from './BoxCreator/BoxCreator'

class LinkLine extends Component {
  state = {
    boxCreating: false,
    linkBoxes: [
      {
        name: 'ВКонтакте',
        url: 'vk.com',
        discription: 'ВКонтакте'
      },
      {
        name: 'GitHub',
        url: 'github.com',
        discription: 'GitHub Projects'
      }
    ]
  };

  createLinkBox(name, url, discription) {
    const linkBox = {
      name,
      url,
      discription
    };
    this.state.linkBoxes.push(linkBox);
    this.setState({
      boxes: this.boxes + 1
    });
  }

  BoxesRender() {
    return this.state.linkBoxes.map((box, index) => {
      return (
        <LinkBox
          key={index}
          name={box.name}
          url={box.url}
          discription={box.discription}
        />
      );
    });
  }

  AddBox = box => {
      this.state.linkBoxes.push({ ...box })
      this.setState({

      })
  }

  render() {
    console.log(this.state.boxes);
    return (
      <React.Fragment>
        <Button type='main' onClick={() => {
            this.setState({
                boxCreating: !this.state.boxCreating
            })
        }}>Создать блок</Button>

        { this.state.boxCreating
            ? <BoxCreator 
                AddBox= { this.AddBox }
                />
            : null
        }

        <div className="LinkLine">

          {this.BoxesRender()}

        </div>
      </React.Fragment>
    );
  }
}

export default LinkLine;