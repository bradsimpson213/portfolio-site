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
                    <div className="image-skills-content">
                        <img 
                            className="profile-image"
                            src="https://res.cloudinary.com/app-academy4/image/upload/v1722546401/assets/headshop_txehlf.png" 
                        />
                        <p>Programming Skills:</p>
                        <div>
                            <DevIcons propLabel="Languages" iconList={["python", "javaScript","rust"]} />
                            <DevIcons propLabel="Frameworks" iconList={["django", "flask", "sqlalchemy", "react", "redux", "express", "sequelize"]} />
                            <DevIcons propLabel="Other Tech" iconList={["docker", "aws", "postgresql", "sqlite"]} />
                        </div>
                    </div>
                    <div className="about-content">
                        <h2>About Me</h2>
                        <p>With a diverse background in the financial and property management/construction industries, I bring a multifaceted perspective to software engineering. My passion lies in creating and building—whether it&apos;s developing a website, crafting an app, or constructing home additions. I am committed to excellence and take great pride in delivering high-quality work.</p>
                        <p>Based in Hawthorne, NJ, just 30 minutes from NYC, I enjoy engaging in DIY projects, gardening, hiking, camping with my family, and reading in my hammock during my free time.</p>
                    </div>
                </div>
                <div>
                    <h2>Experience</h2>
                    <Timeline />
                </div>
            </div>
           
        </div>
    )
}