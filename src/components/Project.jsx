import { Link } from 'react-router-dom'
import DevIcons from './DevIcons'
import './Project.css'

export default function Project ({data}) {

    return(
        <div className="project-card">
            <div>
                <h2>{ data.title }</h2>
                <img className='site-image' src={ data.image } />
                <Link to={ data.url }>{ data.url }</Link>
            </div>
            <div>
                <p>{ data.description }</p>
                <DevIcons propLabel="Tech Stack" iconList={ data.techIcons }/>
            </div>
        </div>
    )
}