import React, {Component} from 'react'
import './ProjectsPage.scss'
import Radium from 'radium'
import Techblock from './Techblock/Techblock'

class ProjectsPage extends Component {
    state = {
        blocks: [
            {
                title: 'Технология',
                discription: 'Описание технологии',
                url: 'technology.tech',
                logo: '',
                color: 'pink',
                background: 'lightblue'
            },
            {
                title: 'Технология 2',
                discription: 'Описание технологии 2',
                url: 'technology.tech2',
                logo: '',
                color: 'cyan',
                background: 'white'
            },
            {
                title: 'Технология 3',
                discription: 'Описание технологии 3',
                url: 'technology.tech3',
                logo: '',
                color: 'gray',
                background: 'pink'
            },
            {
                title: 'Технология 4',
                discription: 'Описание технологии 4',
                url: 'technology.tech4',
                logo: '',
                color: 'pink',
                background: 'lightblue'
            },
            {
                title: 'Технология 5',
                discription: 'Описание технологии 5',
                url: 'technology.tech5',
                logo: '',
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

        console.log(blocksGrid)

        // Теперь это массив компонентов Techblock в порядке рендера
        const blocksDiv = blocksGrid.map(row => {
            return (
                <div style = {{
                    display: 'flex', flexDirection: 'row',
                }}>
                {
                    row.map((block, index) => {
                        return this.blockRender(block, index)
                    })
                }
                </div>
            ) 
        })

        console.log(blocksDiv)

        return blocksDiv

        // return (
        //     <div>
        //         { this.blockRender(0) }
        //     </div>
        // )
    }

    blockRender = (block, index) => {
        return (
            <Techblock 
                key = {index}
                title = {block.title}
                discription = {block.discription}
                url = {block.url}
                color = {block.color}
                background = {block.background}
            />
        )
    }

    render() {
        const style = {
            color: 'white',
            ':hover' : {
                color: 'black',
                cursor: 'pointer'
            }
        }

        return (
            <div className='ProjectsPage'>
                <h1 style={style}>Рандомные блоки</h1>

                <div>
                    { this.rowRender() }
                </div>
            </div>
        )
    }
}

export default Radium(ProjectsPage)