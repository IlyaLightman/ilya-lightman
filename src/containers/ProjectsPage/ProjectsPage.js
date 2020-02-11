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
            }
        ],
        blocksCount: 4 // Блоков в строчке
    }

    // Создание строчек, чтобы в них впихнуть блоки, а когда место закончится, сделать следующую ю ноу
    rowRender = (columns = this.state.blocksCount) => {
        const rows = Math.floor(this.state.blocks.length / columns)

        let BlocksGrid = [

        ]

        this.state.blocks.map((block, index) => {
            
        })

        

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