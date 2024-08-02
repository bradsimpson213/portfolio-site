import Project from "./Project"
import portfolioData from "../data/portfolio"
import './Portfolio.css'

export default function Portfolio () {
    return(
        <div className="portfolio-main-container">
            <h1 className ="portfolio-main-text"                
            >
                My Portfolio
            </h1>
            <div className="portfolio-subcontainer">
                { portfolioData.map( (project, index) => (
                    <Project data={ project } key={ index } />
                ))}
            </div>
        </div>
    )
}