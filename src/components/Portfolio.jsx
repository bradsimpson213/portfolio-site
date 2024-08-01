import Project from "./Project"
import portfolioData from "../data/portfolio"
import './Portfolio.css'

export default function Portfolio () {
    return(
        <div className="portfolio-main-container">
            <div className="portfolio-subcontainer">
                <h2>Portfolio</h2>
                { portfolioData.map( (project, index) => (
                    <Project data={ project } key={ index } />
                ))}
            </div>
        </div>
    )
}