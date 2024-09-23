const portfolio = [
      {
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1727106248/assets/Screenshot_2024-09-23_at_11.41.17_AM_qts22d.png",
        title: "Patchstagram",
        description: "Patch the cat's Instagram clone",
        tech: "Python / Flask Server and React Client",
        techIcons: ["python", "flask", "sqlalchemy", "aws", "javaScript", "react"],
        url: "https://patchstagram.onrender.com",
        gitRepo: "https://github.com/bradsimpson213/patchstagram-production",
        features: [ "• Instagram clone with Posts and Likes features implemented",
            "• Integrated AWS S3 bucket for image storage", 
            "• Front End light/dark themes with React context", 
        ]
      },
      {
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1722638466/assets/Screenshot_2024-08-02_at_6.40.29_PM_cymucc.png",
        title: "StarTrader",
        description: "The best starship trading app in the whole galaxy!",
        tech: "Python / Flask Server and React Client",
        techIcons: ["python", "flask", "sqlalchemy", "javaScript", "react"],
        url: "https://startrader-reborn.onrender.com/",
        gitRepo: "https://github.com/bradsimpson213/startrader-reborn",
        features: [ "• Colaborative project with fellow developer Ben Perlmutter",
            "• Loosely inpired by AutoTrader, but a whole lot more fun and way less real...", 
            "• Implemented ARWES library & custom React components to create a sci-fi user interface", 
            "• Layered database tables approach to starships allows for ship customization", 
        ]
      },
      {
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1722909954/assets/MelloImage_hjofwl.png",
        title: "Mello",
        description: "A Zen space to plan your personal or team projects and goals",
        tech: "Python / Flask Server and React Client",
        techIcons: ["python", "flask", "sqlalchemy", "javaScript", "react"],
        url: "https://mello-y0el.onrender.com",
        gitRepo: "https://github.com/bradsimpson213/Mello/tree/main",
        features: ["• Implemented drag and drop functionality with Atlassian’s React Beautiful DND", 
            "• HTML audio tag player allows users to enjpy relaxing background music as they work", 
            "• Integrated ZenQuotes API to provide random positive quotes throughout the site",
            "• Utilized the Chakra UI component library for a streamline UI/UX experience" 
        ]
      },
      {
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1635974577/dad-jokes/why-did-the-litigation-support-professional-cross-the-road-blog-joke-png-300_200_fbffgs.png",
        title: "Dad Jokes",
        description: "Who doesn't like a good Dad Joke? This site is loaded with them!",
        tech: "Python / Flask Server & React Client",
        techIcons: ["python", "flask", "sqlalchemy", "javaScript", "react"],
        url: "https://dad-jokes-apw7.onrender.com/",
        gitRepo: "https://github.com/bradsimpson213/DJ-Deploy",
        features: ["• Simple app used for instruction in Flask, Sqlalchemy, and React", 
          "• Will add in udate and delete joke CRUD and User Auth in the future"]
      },
      {
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1722910342/assets/flask-rps_jszdvq.png",
        title: "Flask - RPS",
        description: "Rock Paper Scissors with Flask",
        tech: "Python / Flask Server",
        techIcons: ["python", "flask"],
        url: "https://flask-rock-paper-scissors.onrender.com",
        gitRepo: "https://github.com/bradsimpson213/flask-rps",
        features: ["• Simple Rock Paper Scissors implementation, great teaching app", 
          "• Utilizes only Flask and Jinja templating, no JavaScript", "• Implemented Flask flashing for game notification" ]
      },
]

export default portfolio;