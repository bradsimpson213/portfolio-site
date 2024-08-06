import { Link } from 'react-router-dom'
import DevIcons from './DevIcons'
import './Project.css'

export default function Project ({data}) {

    return(
        <div className="project-card">
            <div className='project-heading'>
                <span className='project-title'>
                    { data.title }
                </span>
                <span className='project-description'>
                    { data.description }
                </span>
            </div>
            <div className='project-subsection'>
                <div className='project-visuals-section'>
                    <Link to={ data.url }>
                        <img className='site-image' src={ data.image } />
                    </Link>
                    <div className='project-links'>
                        <Link to={ data.url }>
                            Live Site 
                        </Link>
                        <span className='links-divider'>|</span>
                        <Link to={ data.gitRepo }>
                            Github Repo 
                        </Link>
                    </div>
                </div>
                <div className='project-details-section'>
                        { data.features.map( (feature, index) => (
                            <text key={ index } >{ feature }</text>
                        ))}
                
                    <DevIcons propLabel="Tech Stack" iconList={ data.techIcons }/>
                </div>
            </div>
    
        </div>
    )
}