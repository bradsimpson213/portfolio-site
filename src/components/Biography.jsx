import { useEffect } from "react"
import Timeline from "./Timeline"
import "./Biography.css"
import { animateOnScroll } from "../utils/isVisible"
import DevIcons from "./DevIcons"


export default function Biography() {

    useEffect(() => {
        animateOnScroll()
      }, [])
      
    return (
        <div className="biography-container">
            <h1 className="main-text">
                Hi! I&apos;m Charles (Brad) Simpson!
            </h1>
            <div className="info-container">
                <div className="info-subcontainer">
                    <div className="image-about-content">
                        <img 
                            className="profile-image"
                            src="https://res.cloudinary.com/app-academy4/image/upload/v1722546401/assets/headshop_txehlf.png" 
                        />
                        <div>
                            <h2>About Me</h2>
                            <p className="text-block">Based in Northern NJ I enjoy DIY, hiking, kayaking, camping with my family, and reading in my hammock.</p>
                            <p>I have a diverse background in the financial and construction industries, bringing a unique perspective to software engineering.  My passion lies in creating, whether i&apos;m developing a website, crafting an app, or constructing a new home addition.  I am committed to excellence and take great pride in delivering high-quality work.</p>
                        </div>
                    </div>
                    <div className="certs-skills-container">
                        <div className="certifications-content">
                            <p style={{ textDecoration: "underline"}}>Certifications:</p>
                            <div className="certifications-subcontainer">
                                <div className="python-container">
                                    <img style={{'height': '100px'}} src="https://res.cloudinary.com/app-academy4/image/upload/v1737667284/assets/pcep-30-02-pcep-certified-entry-level-python-progra_agqqez.png" alt="PCEP badge" />       
                                    <p>Certified Python Programmer</p>                 
                                </div>
                                <div className="power-bi-container">
                                    <img style={{'height': '100px'}} src="https://res.cloudinary.com/app-academy4/image/upload/v1741107957/assets/microsoft-certified-associate-badge_dkevlb.svg" alt="microsoft associate badge"/>
                                    <p>Power BI Data Analyst</p>
                                </div>
                            </div>
                        </div>
                        <div className="programming-skill-content">
                            <p style={{ textDecoration: "underline"}}>Programming Skills:</p>
                            <DevIcons propLabel="Languages" iconList={["python", "javaScript","rust"]} />
                            <DevIcons propLabel="Frameworks" iconList={["django", "flask", "sqlalchemy", "react", "redux", "express", "sequelize"]} />
                            <DevIcons propLabel="Other Tech" iconList={["docker", "aws", "postgresql", "sqlite", "playwright"]} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Experience</h2>
                    <p className="text-block">Dynamic Software Engineer with 4+ years experience teaching & implementing Python, React, and database architecture. Project advised 100+ teams developing full-stack applications through daily agile stand-ups and 1:1 technical debugging sessions. Committed to delivering high-quality solutions while fostering collaboration and continuous learning.</p>
                    <Timeline />
                </div>
            </div>
           
        </div>
    )
}