import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Button, Header } from 'semantic-ui-react';
import Projects from '../Components/projectpage-components/Projects';

const ProjectsPage = () => {

    const categories = ["Frontend","Backend","Fullstack","MERN Stack"]
    const [index, setIndex]=useState(0);

    const handleClick = (event) => {
       event.preventDefault();

       if (event.target.name==="front"){
           setIndex(0);
       }

       if (event.target.name==="back"){
        setIndex(1);
        }

        if (event.target.name==="full"){
            setIndex(2);
        }

        if (event.target.name==="MERN"){
            setIndex(3);
        }
    }

    useEffect(()=>{
        AOS.init({
            duration:200
        })
    });

    return ( <>
        <Container className="big-container" id="projects-container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500" >
            <Header as="h1" id="project-header">{categories[index]} Projects</Header>
            <Container className="shadow-container">
            <Container id="button-container">
                <Button name="front" onClick={handleClick} size="tiny"> Frontend </Button>
                <Button name="back" onClick={handleClick} size="tiny"> Backend </Button>
                <Button name="full" onClick={handleClick} size="tiny"> Fullstack </Button>
                <Button name="MERN" onClick={handleClick} size="tiny"> MERN stack </Button>
            </Container>
            <Container className="shadow-container" id="project-container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500" >
                <Projects category={index}></Projects>
            </Container>
            </Container>
        </Container>
    </> )
}

export default ProjectsPage;