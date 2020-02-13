import React from 'react';
import './BlockCreator.scss';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

const logos = [
  { Apple: 'fab fa-apple' },
  { Amazon: 'fab fa-amazon' },
  { Bitcoin: 'fab fa-bitcoin' },
  { Visa: 'fab fa-cc-visa' },
  { Chrome: 'fab fa-chrome' },
  { Ebay: 'fab fa-ebay' },
  { Facebook: 'fab fa-facebook-f' },
  { Firefox: 'fab fa-firefox-browser' },
  { FedEx: 'fab fa-fedex' },
  { Google: 'fab fa-google' },
  { Steam: 'fab fa-steam' },
  { Skype: 'fab fa-skype' },
  { Telegram: 'fab fa-telegram' },
  { Twitch: 'fab fa-twitch' },
  { VK: 'fab fa-vk' },
  { Windows: 'fab fa-windows' },
  { Youtube: 'fab fa-youtube' }
];

const colors = [
  {'Белый / Голубой' : ['white', 'lightblue']},
  {'Белый / Розовый' : ['white', 'pink']},
  {'Голубой / Серый' : ['lightblue', 'lightgray']},
  {'Зелёный / Жёлтый' : ['lightgreen', 'lightyellow']}
]

class BlockCreator extends React.Component {
  state = {
    currBlock : {
      title: '',
      discription: '',
      url: '',
      color: '',
      background: '',
      logo: 'fab fa-apple'
    },
    touched: false,
    invalidInput: false
  }

  createBlock = () => {
    const currBlock = {...this.state.currBlock}
    let invalidInput = this.state.invalidInput

    if (invalidInput) { return }

    if (currBlock.title.length === 0 ||
        currBlock.discription.length === 0 ||
        currBlock.url.length === 0)
    {
        this.setState({
          invalidInput: true
        })
        return
    }

    this.props.creator(currBlock)

    this.inputCleaner()
  }

  inputCleaner = () => {
    this.setState({
      currBlock : {
        title: '',
        discription: '',
        url: '',
        color: '',
        background: '',
        logo: 'fab fa-apple'
      },
      touched: false,
      invalidInput: false
    })
  }

  changeHandler = (event, parameter) => {
    const currBlock = {...this.state.currBlock}
    let invalidInput = this.state.invalidInput

    currBlock[parameter] = event.target.value

    if (currBlock.title.length !== 0 &
        currBlock.discription.length !== 0 &
        currBlock.url.length !== 0)
    {
        invalidInput = false
    }

    if(this.state.touched & currBlock[parameter].length === 0) {
        invalidInput = true
    }

    this.setState({
        invalidInput,
        currBlock,
        touched: true
    })
  }

  findLogo = logoName => {
    let toReturn = ''

    logos.forEach(logo => {
      const thisLogo = (`${Object.keys(logo)[0]}` === `${logoName}`)
      if (thisLogo) { 
        toReturn = (`${Object.values(logo)[0]}`)
      }
    })
    return toReturn
  }

  render() {
    const invalidColor = this.state.invalidInput ? 'red' : 'black'

    return (
      <div className="BlockCreator">
        <div className="InputDiv">
          <Input 
            invalid={this.state.invalidInput}
            value={this.state.currBlock.title}
            onChange={event => {
              this.changeHandler(event, 'title')
            }}
          />
          <p style={{color: invalidColor}}>Название</p>
        </div>
        
        <div className="InputDiv">
          <Input 
            invalid={this.state.invalidInput}
            value={this.state.currBlock.discription}
            onChange={event => {
              this.changeHandler(event, 'discription')
            }}
          />
          <p style={{color: invalidColor}}>Описание</p>
        </div>

        <div className="InputDiv">
          <Input 
            invalid={this.state.invalidInput}
            value={this.state.currBlock.url}
            onChange={event => {
              this.changeHandler(event, 'url')
            }}
          />
          <p style={{color: invalidColor}}>URL</p>
        </div>

        <div className="SelectDiv">
          <select onChange={event => console.log(event.target.value)}>
            <option disabled>Выберите цвета</option>
            {colors.map((color, index) => {
              // console.log(color, index);
              return <option key={index}>{Object.keys(color)}</option>;
            })}
          </select>
          <p>Цвета</p>
        </div>

        <div className="SelectDiv">
          <select onChange={event => {
              const oldBlock = { ...this.state.currBlock }
              oldBlock.logo = this.findLogo(event.target.value)

              this.setState({
                currBlock : oldBlock
              })
            }
            }>
            <option disabled>Выберите логотип</option>
            {logos.map((logo, index) => {
              // console.log(logo, index);
              return <option key={index}>{Object.keys(logo)}</option>;
            })}
          </select>
          <p>Логотип</p>
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          <Button onClick={() => this.createBlock()}>Создать</Button>
        </div>
      </div>
    );
  }
}

export default BlockCreator;