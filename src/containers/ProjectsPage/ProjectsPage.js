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
                color: 'blue',
                background: 'lightblue'
            },
            {
                title: 'Технология 2',
                discription: 'Описание технологии 2',
                url: 'technology.tech2',
                logo: '',
                color: 'blue',
                background: 'lightblue'
            },
            {
                title: 'Технология 3',
                discription: 'Описание технологии 3',
                url: 'technology.tech3',
                logo: '',
                color: 'blue',
                background: 'lightblue'
            },
            {
                title: 'Технология 4',
                discription: 'Описание технологии 4',
                url: 'technology.tech4',
                logo: '',
                color: 'blue',
                background: 'lightblue'
            },
            {
                title: 'Технология 5',
                discription: 'Описание технологии 5',
                url: 'technology.tech5',
                logo: '',
                color: 'blue',
                background: 'lightblue'
            }
        ],
        blocksCount: 2 // Блоков в строчке
    }

    // Создание строчек, чтобы в них впихнуть блоки, а когда место закончится, сделать следующую ю ноу
    rowRender = (columns = this.state.blocksCount) => {
        const rows = Math.floor(this.state.blocks.length / columns)

        const blocksGrid = []

        console.log(rows)

        for (let i = 0; i < rows + 1; i++) {
            blocksGrid.push([])
            console.log('я тут ', i)
        }

        console.log(blocksGrid)

        this.state.blocks.forEach((block, index) => {
            console.log(Math.floor(index / columns))
            blocksGrid[Math.floor(index / columns)].push(block)
        })

        console.log(blocksGrid)

        // return (
        //     <div>
        //         { this.blockRender(0) }
        //     </div>
        // )
    }

    blockRender = block => {
        return (
            <Techblock 
                title = {block.title}
                discription = {block.discription}
                url = {block.url}
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

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Techblock />
                    <Techblock />
                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Techblock />
                    <Techblock />
                </div>
                
                <div>
                    { this.blockRender(this.state.blocks[0])}
                </div>

                <div>
                    { this.rowRender() }
                </div>
            </div>
        )
    }
}

export default Radium(ProjectsPage)