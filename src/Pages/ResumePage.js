import React, { useEffect } from "react";
import { Container, Header, Icon, Image, Button} from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resume(){

    useEffect(()=>{
        AOS.init({
          duration: 2000
        });
      });

    return(
        <Container className="big-container" id="projects-container">
                <Container className="shadow-container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000" >
                    <Header as="h1" id="skills-header">Skills</Header>
                    <Container id="icons">
                        
                        <Icon name="js" size="huge"/>
                        <Icon name="html5" size="huge"/>
                                <Icon name="react" size="huge"/>
                                <Icon name="node js" size="huge"/>
                                <Icon name="css3" size="huge"/>
                    </Container>
                    <Header as="h1" id="skills-header">Education</Header>
                    <Container id="school-icons">
                        <div className="school-and-label">
                            <Image size="tiny" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png"></Image>
                            <div className="school-label">Bachelor of Arts</div>
                        </div>
                        <div className="school-and-label">
                            <Image size="tiny" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/1200px-University_of_Texas_at_Austin_seal.svg.png"></Image>
                            <div className="school-label">Web Development Certificate</div>
                        </div>
                    </Container>
                    <Header as="h1" id="skills-header">Resume</Header>
                    <p className="center">Download my resume <a href="https://docs.google.com/document/d/1gU5XflUFWsucu_gZsXpsxjS7mbhV3QjH/edit?usp=sharing&ouid=117658244105350147754&rtpof=true&sd=true">here</a></p>
                </Container>
        </Container>
)
}

export default Resume;