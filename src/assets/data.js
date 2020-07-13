const Projects = [
    {
        id: 1,
        name: "My portfolio",
        littleDescription: "My portfolio, a place where you can find all my projects",
        longDescription: "I created it because i think that is important to have a portfolio, but also, my portfolio is a project",
        featured: false,
        Technologies: [
            {
                tech: "React",
                background: "161616",
                color: "4cdafb",
                icon: 1
            },
            {
                tech: "CSS",
                background: "3295f8",
                color: "fff",
                icon: 4
            },
            {
                tech: "JSON",
                background: "fff",
                color: "000",
                icon: 6
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Portfolio",
        demo: "https://rogeliosamuel621.netlify.app/",
        features: [
            "data management",
            "Responsive"
        ]
    },
    {
        id: 2,
        name: "Jobs listing",
        littleDescription: "Project created in order to practice Reactjs. Challenge from https://www.frontendmentor.io",
        longDescription: "I chose this project because it allowed me to use the state of Reactjs making the search bar",
        featured: true,
        Technologies: [
            {
                tech: "React",
                background: "161616",
                color: "4cdafb",
                icon: 1
            },
            {
                tech: "CSS",
                background: "3295f8",
                color: "fff",
                icon: 4
            },
            {
                tech: "JSON",
                background: "fff",
                color: "000",
                icon: 6
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Jobs-Listing",
        demo: "https://rogeliosamuel621.github.io/Jobs-Listing/",
        features: [
            "Search bar",
            "data management",
            "Responsive"
        ]
    },
    {
        id: 3,
        name: "Social media dashbord",
        littleDescription: "Project created in order to practice Reactjs. Challenge from https://www.frontendmentor.io",
        longDescription: "I created this project in order to practice React, i chose this challenge because it has interactivity and that allowed me to use the state of React",
        featured: true,
        Technologies: [
            {
                tech: "React",
                background: "161616",
                color: "4cdafb",
                icon: 1
            },
            {
                tech: "CSS",
                background: "3295f8",
                color: "fff",
                icon: 4
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Social-media-dashboard",
        demo: "https://rogeliosamuel621.github.io/Social-media-dashboard/",
        features: [
            "Dark mode and white mode",
            "Responsive design"
        ]
    },
    {
        id: 4,
        name: "Safe contacts",
        littleDescription: "Project created in order to practice my backend skills and simulating that I'm doing a professional project.",
        longDescription: "On this project i applied all my knowledge of backend and frontend (30/06/2002), trying to make a product that worth it",
        featured: true,
        Technologies: [
            {
                tech: "Node.js",
                background: "69a12a",
                color: "fff",
                icon: 0
            },
            {
                tech: "MySQL",
                background: "f29111",
                color: "fff",
                icon: 5
            },
            {
                tech: "ejs",
                background: "e34c26",
                color: "fff",
                icon: 3
            },
            {
                tech: "CSS",
                background: "3295f8",
                color: "fff",
                icon: 4
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Safe-Contacts",
        demo:"https://github.com/rogeliosamuel621/Safe-Contacts#readme",
        features: [
            "Auth with JWT ",
            "Render with ejs",
            "Hash passwords",
            "Uses cookies to save jwt",
            "Register with confirm password and it checks if the email is repeated",
            "Messages to inform issues in log in and register process",
            "Each user can see their own contacts, edit them, and delete them",
            "Edit profile user",
        ]
    },
    {
        id: 5,
        name: "CRUD with MySQL",
        littleDescription: "I created this project in order to practice backend",
        longDescription: "This is not my first project to practice my backend skills but is the first where i apply good practice of security and code, also i learned to use Postman",
        featured: false,
        Technologies: [
            {
                tech: "Node.js",
                background: "69a12a",
                color: "fff",
                icon: 0
            },
            {
                tech: "MySQL",
                background: "f29111",
                color: "fff",
                icon: 5
            },
        ],
        repo: "https://github.com/rogeliosamuel621/CRUD-MySQL-Node.js",
        demo:"https://github.com/rogeliosamuel621/CRUD-MySQL-Node.js#README",
        features: [
            "Auth with JWT ",
            "Uses cookies to save JWT",
            "Hash passwords",
            "Each user can see their own contacts, edit them, and delete them",
        ]
    },
    {
        id: 6,
        name: "Naves Game",
        littleDescription: "A simple videogame in order to practice and learn Javascript.",
        longDescription: "I really apreciate this project because i made this project without any tutos, i broke my mind resolving the logic challenges. Rules are simple: with space shoot to enemies and boss, also avoid the bullets that the boss throw you. ONLY AVAILABLE ON DESKTOPS",
        featured: true,
        Technologies: [
            {
                tech: "Javascript",
                background: "f7df1e",
                color: "000",
                icon: 2
            },
            {
                tech: "HTML",
                background: "e34c26",
                color: "fff",
                icon: 3
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Naves-Game",
        demo: "https://rogeliosamuel621.github.io/Naves-Game/Index.html",
        features: [
            "Final boss",
            "Infinite bullets",
            "Scores",
            "Lives",
            "Boss throws you",
        ]
    },
    {
        id: 7,
        name: "Ping pong game",
        littleDescription: "A project made to improve with javascript language, just for practice.",
        longDescription: "A project created drawing on canvas, i lerned this on https://developer.mozilla.org/es/. Then a create others games. ONLY AVAILABLE ON DESKTOPS",
        featured: false,
        Technologies: [
            {
                tech: "HTML",
                background: "e34c26",
                color: "fff",
                icon: 3
            },
            {
                tech: "Javascript",
                background: "f7df1e",
                color: "000",
                icon: 2
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Ping-pong-game",
        demo:"https://rogeliosamuel621.github.io/Ping-pong-game/Index.html",
        features: [
            "Physical",
            "Destroy blocks",
            "Lives",
            "Score",
            "Move the paddle with arrows and mouse",
        ]
    },
    {
        id: 8,
        name: "Game: Simon says",
        littleDescription: "My first project with HTML and CSS in order to enter the world of web development.",
        longDescription: "This is my first time with Javascript. i saw this project at Platzi but i added this diffilculty modes. Rules: It has a sequence of colors, you have to wait  for the sequence and then click on them",
        featured: false,
        Technologies: [
            {
                tech: "HTML",
                background: "e34c26",
                color: "fff",
                icon: 3
            },
            {
                tech: "CSS",
                background: "3295f8",
                color: "fff",
                icon: 4
            },
            {
                tech: "Javascript",
                background: "f7df1e",
                color: "000",
                icon: 2
            }
        ],
        repo: "https://github.com/rogeliosamuel621/Juego-Simon-dice-con-JS",
        demo:"https://rogeliosamuel621.github.io/Juego-Simon-dice-con-JS/index.html",
        features: [
            "difficulty modes",
            "At the top you can see the level where you are",
            "10 levels to win",
        ]
    },
    {
        id: 9,
        name: "My first website",
        littleDescription: "My first project with HTML and CSS in order to enter the world of web development.",
        longDescription: "This is the firs website wich i made in order to practice my flexbox skills. It is like the firs template of my portfolio. Also Here were where i creates my logo",
        featured: false,
        Technologies: [
            {
                tech: "HTML",
                background: "e34c26",
                color: "fff",
                icon: 3
            },
            {
                tech: "CSS",
                background: "3295f8",
                color: "fff",
                icon: 4
            }
        ],
        repo: "https://github.com/rogeliosamuel621/My-first-web-site",
        demo:"https://rogeliosamuel621.github.io/My-first-web-site/index.html",
        features: [
            "You can move on to other sections in the website",
            "It is responsive"
        ]
    }
]

module.exports = Projects;