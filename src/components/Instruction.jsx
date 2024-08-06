import { Link } from 'react-router-dom'
import "./Instruction.css"

export default function Instruction () {
    return(
        <div className="instruction-main-container">
            <h1 className ="instruction-main-text">
                Instruction    
            </h1>
            <div className='instructional-container'>
                <p>I have been an Instructor at a Software Engineering Bootcamp for the past 4 years.</p>
                <p>Check out my YouTube Channel for videos of me teaching Python</p>
                <Link to="https://www.youtube.com/channel/UC_-5HaYHK-nvWxhxmM9WKzA">
                    YouTube Channel Link
                </Link>
            </div>
        </div>
    )
}