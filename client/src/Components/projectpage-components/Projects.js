import React from "react";
import {Card, Header, Icon, Container, Image, Button} from 'semantic-ui-react';

const data= [
    {projects:[
        {
            name: 'Gopher',
            description: "Gopher is an event planning wesbite designed to help users find upcoming events near them. Users enter a date, a city, and a topic of interest, and the site offers them suggestions for upcoming events. They are then able to buy tickets to those events, or load directions. Gopher is written using Javascript, CSS, HTML, and the TicketMaster API.",
            image: 'https://github.com/lrk83/Gopher/blob/main/assets/images/96860-groundhog-day-cartoon-gopher-for-events-near-me.png?raw=true',
            technologies:["html5", "css3", "js"],
            github: "https://github.com/lrk83/Gopher",
            demo: "https://lrk83.github.io/Gopher/",
            odd: true
        },
        {
            name: 'Weather Dashboard',
            description: "The weather dashboard displays current and future weather conditions in any major American city. Users may enter a city into the search bar, or click on their previously searched cities to see conditions. The site is built using Javascript, HTML, CSS, Bootstrap, and the OpenWeather One Call API.",
            image: 'https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg',
            technologies:["html5", "css3", "js"],
            github: "https://github.com/lrk83/Weather-Dashboard",
            demo: "https://lrk83.github.io/Weather-Dashboard/",
            odd: false
        },
        {
            name: 'Run Buddy',
            description: "Run Buddy is a gym application built using HTML and CSS. The wesbite allows users to explore Run Buddy's information, learn about their trainers, and sign up to start their own workout plan.",
            image: 'https://github.com/lrk83/run-buddy/blob/main/assets/images/hero-bg.jpg?raw=true',
            technologies:["html5", "css3"],
            github: "https://github.com/lrk83/run-buddy",
            demo: "https://lrk83.github.io/run-buddy/",
            odd: true
        },
        {
            name: 'Coding Quiz',
            description: "Coding Quiz is a quick little challenge for beginning coders, built using HTML, Bootsrap, and Javascript. The quiz gives users 1 minut to answer 10 basic coding questions. When they finish all ten questions their remaining time is saved to their locally stored high scores. Watch out though, if you get a question wrong, you lose ten seconds!",
            image: 'https://github.com/lrk83/Code-Quiz/blob/main/Screenshots/Screen%20Shot%202021-06-06%20at%209.25.10%20PM.png?raw=true',
            technologies:["html5", "css3", "js"],
            github: "https://github.com/lrk83/run-buddy",
            demo: "https://lrk83.github.io/run-buddy/",
            odd: false
        }
    ]}
]

const Projects = (props) => {
    const {category}=props;

    return (
        <div>
            {data[category].projects.map(project=> (<>
                {project.odd ? (<>
                    <Container className="single-post-content">
                        <Container className="profile-picture-container">
                            <Image fluid rounded className="profile-picture" src={project.image} />
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