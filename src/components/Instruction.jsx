import { Link } from 'react-router-dom'
import "./Instruction.css"

export default function Instruction () {
    return(
        <div className="instruction-main-container">
            <h1 className ="instruction-main-text">
                Instruction    
            </h1>
            <div className='instructional-container'>
                <p>Check out my YouTube Channel for videos of me teaching Python</p>
                <Link to="https://www.youtube.com/channel/UC_-5HaYHK-nvWxhxmM9WKzA">
                    YouTube Channel Link
                </Link>
            </div>
        </div>
    )
}