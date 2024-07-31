import './Project.css'

export default function Project ({data}) {

    return(
        <div className="project-card">
            <div>
                <h3>{ data.title }</h3>
                <img className='site-image' src={ data.image } />
            </div>
            <p>{ data.description }</p>
        </div>
    )
}