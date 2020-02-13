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
  { 'D&D': 'fab fa-d-n-d' },
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
      description: '',
      url: ''
    },
    touched: false
  }

  render() {
    return (
      <div className="BlockCreator">
        <div className="InputDiv">
          <Input />
          <p>Название</p>
        </div>
        
        <div className="InputDiv">
          <Input />
          <p>Описание</p>
        </div>

        <div className="InputDiv">
          <Input />
          <p>URL</p>
        </div>

        <div className="SelectDiv">
          <select>
            <option disabled>Выберите цвета</option>
            {colors.map((color, index) => {
              console.log(color, index);
              return <option key={index}>{Object.keys(color)}</option>;
            })}
          </select>
          <p>Цвета</p>
        </div>

        <div className="SelectDiv">
          <select>
            <option disabled>Выберите логотип</option>
            {logos.map((logo, index) => {
              console.log(logo, index);
              return <option key={index}>{Object.keys(logo)}</option>;
            })}
          </select>
          <p>Логотип</p>
        </div>
        
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          <Button>Создать</Button>
        </div>
      </div>
    );
  }
}

export default BlockCreator;