import { Link } from 'react-router-dom'
import DevIcons from './DevIcons'
import './Project.css'

export default function Project ({data}) {

    return(
        <div className="project-card">
            <div className='project-visuals-section'>
                <h2>{ data.title }</h2>
                <Link to={ data.url }>
                    <img className='site-image' src={ data.image } />
                    <p>{ data.url }</p>
                </Link>
            </div>
            <div className='project-details-section'>
                <p className='project-description'>
                    { data.description }
                </p>
                    { data.features.map( (feature, index) => (
                        <p key={ index } >{ feature }</p>
                    ))}
            
                <DevIcons propLabel="Tech Stack" iconList={ data.techIcons }/>
            </div>
        </div>
    )
}