import React from "react";
import {Card, Header, Icon, Container, Image, Button} from 'semantic-ui-react';

const data= [
    {projects:[
        {
            name: 'The Backbeat',
            id: 'backbeat',
            description: "The backbeat is a place for home producers to share and collect music production knowledge. It allows producers to post all their favorite music production resources from around the internet in one place, and pick up new resources from others. This website includes JWT token Authentication. It is a MERN stack application that I wrote from scratch entirely myself using React, Graphql, Javascript, Node.js, Express, MongoDB, Mongoose, React Router, and Semantic UI.",
            image: 'https://wallpaperbat.com/img/10293-jeremy-sutton-studios-art-of-jazz-2018-jeremy-sutton-studios.jpg',
            technologies:["js","node js","react"],
            github: "https://github.com/lrk83/the-backbeat",
            demo: "https://the-backbeat.herokuapp.com/",
            odd: true
        },
        {
            name: 'Book Search Engine',
            id: 'booksearch',
            description: "This is a website designed for avid readers to search for books, and a compile a list of books to read. Users can search books from the Google Books API and save them to their account. Later, they can log back in and delete books they have checked off the list! The wesbite includes JWT token Authentication. It is a MERN stack application written using React, Graphql, Javascript, Node.js, Express, MongoDB, Mongoose, and React Router.",
            image: 'https://github.com/lrk83/solid-broccoli/raw/main/Screenshots/Screen%20Shot%202021-10-03%20at%2010.56.24%20AM.png',
            technologies:["js", "node js","react"],
            github: "https://github.com/lrk83/solid-broccoli",
            demo: "https://lrk83-solid-broccoli.herokuapp.com/",
            odd: false
        }
    ]},
    {projects:[
        {
            name: 'Gopher 2.0',
            id: 'gopher-two',
            description: "Gopher 2.0 is an event planning website and social media application. It prvoides a place for Austinites to plan and share local events, search for upcoming events, and comment on others' posts. It is a full stack application written using Javascript, Node.js, Express, Dcrypt, Dotenv, Handlebars, and Bulma",
            image: 'https://user-images.githubusercontent.com/83102464/130361461-04becfc4-2233-4c3f-bf90-d99a65542ab5.png',
            technologies:["js","node js"],
            github: "https://github.com/lrk83/Gopher-2.0",
            demo: "https://thawing-fortress-75852.herokuapp.com/",
            odd: true
        },
        {
            name: 'The Tech Blog',
            id: 'techblog',
            description: "This is a CMS-style blog site for tech writers to publish their thoughts and opinions. The site allows visitors to view existing blog posts, or log in to make their own posts and comment on others'. It is a full stack application written using Javascript, Node.js, SQL, Sequelize, Handlebars, Express, Bcrypt, and Dotenv",
            image: 'https://github.com/lrk83/Tech-Blog/raw/main/screenshots/Screen%20Shot%202021-08-16%20at%203.42.21%20PM.png',
            technologies:["js", "node js"],
            github: "https://github.com/lrk83/Tech-Blog",
            demo: "https://lrk83-tech-blog.herokuapp.com/",
            odd: false
        }
    ]},
    {projects:[
        {
            name: 'Gopher',
            id: 'gopher',
            description: "Gopher is an event planning wesbite designed to help users find upcoming events near them. Users enter a date, a city, and a topic of interest, and the site offers them suggestions for upcoming events. They are then able to buy tickets to those events, or load directions. Gopher is written using Javascript, CSS, HTML, and the TicketMaster API.",
            image: 'https://github.com/lrk83/Gopher/blob/main/assets/images/96860-groundhog-day-cartoon-gopher-for-events-near-me.png?raw=true',
            technologies:["html5", "css3", "js"],
            github: "https://github.com/lrk83/Gopher",
            demo: "https://lrk83.github.io/Gopher/",
            odd: true
        },
        {
            name: 'Weather Dashboard',
            id: 'weather',
            description: "The weather dashboard displays current and future weather conditions in any major American city. Users may enter a city into the search bar, or click on their previously searched cities. The site is built using Javascript, HTML, CSS, Bootstrap, and the OpenWeather One Call API.",
            image: 'https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg',
            technologies:["html5", "css3", "js"],
            github: "https://github.com/lrk83/Weather-Dashboard",
            demo: "https://lrk83.github.io/Weather-Dashboard/",
            odd: false
        },
        {
            name: 'Run Buddy',
            id: "run",
            description: "Run Buddy is a gym application built using HTML and CSS. The wesbite allows users to explore Run Buddy's information, learn about their trainers, and sign up to start their own workout plan.",
            image: 'https://github.com/lrk83/run-buddy/blob/main/assets/images/hero-bg.jpg?raw=true',
            technologies:["html5", "css3"],
            github: "https://github.com/lrk83/run-buddy",
            demo: "https://lrk83.github.io/run-buddy/",
            odd: true
        },
        {
            name: 'Coding Quiz',
            id:'quiz',
            description: "Coding Quiz is a quick little challenge for beginning coders, built using HTML, Bootsrap, and Javascript. The quiz gives users 1 minut to answer 10 basic coding questions. When they finish all ten questions their remaining time is saved to their locally stored high scores. Watch out though, if you get a question wrong, you lose ten seconds!",
            image: 'https://github.com/lrk83/Code-Quiz/blob/main/Screenshots/Screen%20Shot%202021-06-06%20at%209.25.10%20PM.png?raw=true',
            technologies:["html5", "css3", "js"],
            github: "https://github.com/lrk83/run-buddy",
            demo: "https://lrk83.github.io/run-buddy/",
            odd: false
        }
    ]},
    {projects:[
        {
            name: 'Employee Tracker',
            id:'tracker',
            description: "This is a command line application that allows buisness owners to view and manage the departments, roles, and employees in their company. The application will present you any data in formatted tables, and will store data you enter in an SQL database. It is written using Javascript, Node.js, SQL, MySQL, and the Inquirer package in Node",
            image: 'https://github.com/lrk83/Employee-Tracker/raw/main/screenshots/Screen%20Shot%202021-08-01%20at%209.34.47%20PM.png',
            technologies:["js", "node js"],
            github: "https://github.com/lrk83/Employee-Tracker",
            demo: "https://www.youtube.com/watch?v=jnOR-ecExaM",
            odd: true
        },
        {
            name: 'E-Commerce Back End',
            id: 'commerce',
            description: "This is a command line application that allows managers to interact with an SQL databse of products, tags, and categories through CRUD API routes. It is written using Javascript, Node.js, SQL, MySQL, Sequelize, and the Dotenv package.",
            image: 'https://camo.githubusercontent.com/9df6d8eaecc4b2b44114796fd9b70f682db81679d99396289b04976df744f11d/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f31757074554178435766512f302e6a7067',
            technologies:["js","node js"],
            github: "https://github.com/lrk83/E-Commerce-Back-End",
            demo: "https://www.youtube.com/watch?v=1uptUAxCWfQ",
            odd: false
        }
    ]},
]

const Projects = (props) => {
    const {category}=props;

    return (
        <div>
            {data[category].projects.map(project=> (<>
                {project.odd ? (<>
                    <Container className="single-post-content">
                        <Container className="profile-picture-container">
                            <Image id={project.id} fluid rounded className="profile-picture" src={project.image} />
                        </Container>
                        <Container className="info">
                            <Card className="project-card">
                                <Header as="h2">{project.name}</Header>
                                <Card.Content>
                                    {project.description}
                                </Card.Content>
                                <Card.Content>
                                    <Header as="h5">Technologies</Header>
                                    {project.technologies.map(icon=>(
                                        <Icon size="large" name={icon} />
                                    ))}
                                </Card.Content>
                                <Card.Content>
                                    <Button href={project.github}><Icon name="github" /> Code </Button>
                                    <Button href={project.demo}>Demo</Button>
                                </Card.Content>
                            </Card>
                        </Container>
                    </Container>
                </>):(<>
                    <Container className="single-post-content">
                        <Container className="info">
                            <Card className="project-card">
                                <Header as="h2" textAlign="right">{project.name}</Header>
                                <Card.Content textAlign="right">
                                    {project.description}
                                </Card.Content>
                                <Card.Content id="float-right">
                                    <Header as="h5">Technologies</Header>
                                    {project.technologies.map(icon=>(
                                        <Icon size="large" name={icon} />
                                    ))}
                                </Card.Content>
                                <Card.Content id="float-right">
                                    <Button href={project.github}><Icon name="github" /> Code </Button>
                                    <Button href={project.demo}>Demo</Button>
                                </Card.Content>
                            </Card>
                        </Container>
                        <Container className="profile-picture-container">
                            <Image fluid rounded className="profile-picture" src={project.image} />
                        </Container>
                    </Container>
                </>)}
            </>))}
        </div>
    )
}

export default Projects;