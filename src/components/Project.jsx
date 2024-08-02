import DevIcons from './DevIcons'
import './Project.css'

export default function Project ({data}) {

    return(
        <div className="project-card">
            <div>
                <h3>{ data.title }</h3>
                <img className='site-image' src={ data.image } />
            </div>
            <p>{ data.description }</p>
            <h4>Tech Stack</h4>
            <DevIcons iconList={ data.techIcons }/>
        </div>
    )
}