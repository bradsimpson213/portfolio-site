import { Link } from 'react-router-dom'
import "./Instruction.css"

export default function Instruction () {
    return(
        <div className="instruction-main-container">
            <h1 className ="instruction-main-text">
                Instruction    
            </h1>
            <div className='instructional-container'>
                <img src="https://res.cloudinary.com/app-academy4/image/upload/v1723047413/assets/Building_under_Construction_7_generated_iqdjtt.jpg"/>
                <h3>Sorry this page is a work in progress...</h3>
     
                <h3>Check out my YouTube Channel &quot;Brad Codes&quot; for videos of me teaching Python</h3>
                <Link to="https://www.youtube.com/channel/UC_-5HaYHK-nvWxhxmM9WKzA">
                    YouTube Channel Link
                </Link>
                <p>In the last five years I have developed a passion for sharing my knowledge with others, both in my career and my time volunteering as a Scout Leader.  When it comes to teaching a topic, my general approach is, there are certain fundamentals we need to cover and as long as we do, we should have as much fun as possible doing so.</p>  
                {/* <p>I have been educating Software Engineers for over 4 years, predominantly in web development using Python Flask Servers and JavaScript React Clients.</p>
                 */}
            </div>
        </div>
    )
}