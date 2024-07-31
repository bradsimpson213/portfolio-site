import "./Biography.css"


export default function Biography() {

    return (
        <div className="biography-container">
            <h1 className="main-text">
                Hi! I&apos;m Brad Simpson!
            </h1>
            <div className="info-container">
                <img 
                    className="profile-image"
                    src="https://res.cloudinary.com/app-academy4/image/upload/v1722262287/assets/IMG_7331_ykwt16.jpg" 
                />
                <div>

                </div>
                <div>
                    <h3>About</h3>
                    <p>With a diverse background in the financial and property management/construction industries, I bring a multifaceted perspective to software engineering. My passion lies in creating and building—whether it&apos;s developing a website, crafting an app, or constructing home additions. I am committed to excellence and take great pride in delivering high-quality work.</p>
                    <p>Based in Hawthorne, NJ, just 30 minutes from NYC, I enjoy engaging in DIY projects, gardening, hiking, camping with my family, and reading in my hammock during my free time.</p>
                </div>
            </div>
           
        </div>
    )
}