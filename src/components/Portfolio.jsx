import Project from "./Project"
import portfolioData from "../data/portfolio"

export default function Portfolio () {
    return(
        <div>
            <h2>Portfolio</h2>
            { portfolioData.map( (project, index) => (
                <Project data={ project } key={ index } />
            ))}
        </div>
    )
}