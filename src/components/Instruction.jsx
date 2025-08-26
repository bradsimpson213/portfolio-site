import { Link } from 'react-router-dom'
import "./Instruction.css"

export default function Instruction () {
    return(
        <div className="instruction-main-container">
            <h1 className ="instruction-main-text">
                Instruction    
            </h1>
            <div className='instructional-container'>
                <div className="instructional-MCT">
                    <img style={{'height': '150px', "paddingLeft": "10px"}} src="https://res.cloudinary.com/app-academy4/image/upload/v1755783888/Simplified_MCT_Badge_ptdeog.png" alt="MCT badge" />
                    <div className="MCT-details">
                        <h3>Microsoft Certified Trainer</h3>
                        <p>As a Microsoft Certified Trainer, I can offer instruction for the following Microsoft Courses:</p>
                        <ul>
                            <li>
                                <Link to='https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification'>
                                    Microsoft Certified: Power BI Data Analyst Associate
                                </Link>
                            </li>
                            <li>
                                <Link to='https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/?practice-assessment-type=certification'>
                                    Microsoft Certified: Azure AI Fundamentals
                                </Link>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="instructional-youtube">
                    <h3>Check out my YouTube Channel &quot;Brad Codes&quot; for videos of me teaching Python</h3>
                    <Link to="https://www.youtube.com/channel/UC_-5HaYHK-nvWxhxmM9WKzA">
                        YouTube Channel Link
                    </Link>
                    <div className='youtube-video-container'>
                        <iframe 
                            width="300" 
                            height="200" 
                            src="https://www.youtube.com/embed/hn_t127u41E?si=NZ-5IFCxDIPAm1C1" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        >
                        </iframe>
                        <iframe 
                            width="300" 
                            height="200" 
                            src="https://www.youtube.com/embed/EmtN2hDL2g8?si=gPRGZ8Z2hCx5DEn_" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <p>In the last five years I have developed a passion for sharing my knowledge with others, both in my career and my time volunteering as a Scout Leader.  When it comes to teaching a topic, my general approach is, there are certain fundamentals we need to cover and as long as we do, we should have as much fun as possible doing so.</p>
                </div>
            </div>
        </div>
    )
}