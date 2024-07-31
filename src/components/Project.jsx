import { FaFlask,  FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

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