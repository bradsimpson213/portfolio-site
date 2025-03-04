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
                Hi! I&apos;m Brad Simpson!
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
                            <p className="text-block">Based in Northern NJ, just 30 minutes from NYC, I enjoy engaging in DIY projects, gardening, hiking, kayaking, camping with my family, and reading in my hammock during my free time.</p>
                            <p>With a diverse background in the financial and property management/construction industries, I bring a multifaceted perspective to software engineering.  My passion lies in creating and building, whether it&apos;s developing a website, crafting an app, or constructing a new home addition.  I am committed to excellence and take great pride in delivering high-quality work.</p>
                        </div>
                    </div>
                    <div className="certs-skills-container">
                        <div className="certifications-content">
                            <p>Certifications:</p>
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
                            <p>Programming Skills:</p>
                            <DevIcons propLabel="Languages" iconList={["python", "javaScript","rust"]} />
                            <DevIcons propLabel="Frameworks" iconList={["django", "flask", "sqlalchemy", "react", "redux", "express", "sequelize"]} />
                            <DevIcons propLabel="Other Tech" iconList={["docker", "aws", "postgresql", "sqlite", "playwright"]} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Experience</h2>
                    <p className="text-block">Dynamic and detail-oriented Software Engineer with a robust background in full-stack web development, instructional delivery, and project management. Proficient in Python, JavaScript, SQL, and modern frameworks including Flask, Django, React, and Redux. Demonstrated expertise in developing interactive web applications, database architecture, and API integrations. Adept at leading and mentoring teams, with a proven track record of enhancing student learning experiences and managing complex projects. Strong problem-solving skills, a passion for innovative solutions, and a commitment to continuous learning and professional growth.</p>
                    <Timeline />
                </div>
            </div>
           
        </div>
    )
}