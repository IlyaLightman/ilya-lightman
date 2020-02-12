import React, {Component} from 'react'
import './ProjectsPage.scss'
import Radium from 'radium'
import Techblock from './Techblock/Techblock'

class ProjectsPage extends Component {
    state = {
        blocks: [
            {
                title: 'Amazon',
                discription: 'Ну Amazon и Amazon',
                url: 'amazon.site',
                logo: 'fab fa-amazon',
                color: 'pink',
                background: 'lightblue'
            },
            {
                title: 'Apple',
                discription: 'Яблочко',
                url: 'apple.site',
                logo: 'fab fa-apple',
                color: 'cyan',
                background: 'white'
            },
            {
                title: 'Airbnb',
                discription: 'Кто? Где?',
                url: 'airbnb.site',
                logo: 'fab fa-airbnb',
                color: 'lightgray',
                background: 'pink'
            },
            {
                title: 'DnD',
                discription: 'Подземелья, драконы...',
                url: 'dnd.site',
                logo: 'fab fa-d-and-d',
                color: 'pink',
                background: 'lightblue'
            },
            {
                title: 'Ebay',
                discription: 'Купи',
                url: 'ebay.site',
                logo: 'fab fa-ebay',
                color: 'lightgreen',
                background: 'lightyellow'
            }
        ],
        blocksCount: 4 // Блоков в строчке
    }

    // Создание строчек, чтобы в них впихнуть блоки, а когда место закончится, сделать следующую ю ноу
    rowRender = (columns = this.state.blocksCount) => {
        const rows = Math.floor(this.state.blocks.length / columns)

        const blocksGrid = []

        for (let i = 0; i < rows + 1; i++) {
            blocksGrid.push([])
        }

        this.state.blocks.forEach((block, index) => {
            blocksGrid[Math.floor(index / columns)].push(block)
        })

        // Теперь это массив компонентов Techblock в порядке рендера
        const blocksDiv = blocksGrid.map((row, rowIndex) => {
            return (
                <div style = {{
                    display: 'flex', flexDirection: 'row',
                }} key={rowIndex}>
                {
                    row.map((block, index) => {
                        const key = `${rowIndex+1}${index+1}`
                        return this.blockRender(block, key)
                    })
                }
                </div>
            ) 
        })

        return blocksDiv
    }

    blockRender = (block, key) => {
        return (
            <Techblock 
                key = {key}
                title = {block.title}
                discription = {block.discription}
                url = {block.url}
                color = {block.color}
                background = {block.background}
                width = {85 / this.state.blocksCount}
                logo = {block.logo}
            />
        )
    }

    onButtunCountHandler = count => {
        this.setState({
            blocksCount: count
        })
    }

    // shouldComponentUpdate(prevState, nextState) {
    //     if (this.state.blocks === nextState.blocks) {
    //         return false
    //     }
    //     return true
    // }

    render() {
        return (
            <div className='ProjectsPage'>
                <h1>Рандомные блоки</h1>

                <div className='row'>
                    { this.rowRender() }
                </div>

                <h3 style={{color: 'white'}}>Блоков в строчке</h3>

                <div style={{
                    display: 'flex',
                    marginBottom: 25
                }}>
                    <button className='but' 
                        onClick={() => this.onButtunCountHandler(1)}>1</button>
                    <button className='but' 
                        onClick={() => this.onButtunCountHandler(2)}>2</button>
                    <button className='but' 
                        onClick={() => this.onButtunCountHandler(3)}>3</button>
                    <button className='but' 
                        onClick={() => this.onButtunCountHandler(4)}>4</button>
                    <button className='but' 
                        onClick={() => this.onButtunCountHandler(5)}>5</button>
                </div>
                
                <div>
                    <h1>Создать блок</h1>
                </div>

                <div style={{textAlign: 'center', marginBottom: 200}}>
                    <h2>Тут будет красивый интерфейс для создания нового блока</h2>
                    <p>С выбором цветов и логотипа</p>
                </div>
            </div>
        )
    }
}

export default Radium(ProjectsPage)