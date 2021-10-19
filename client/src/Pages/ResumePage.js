import React, { useEffect } from "react";
import { Container, Header} from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resume(){

    useEffect(()=>{
        AOS.init({
          duration: 2000
        });
      });

    return(
        <Container className="big-container" id="projects-container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500" >
                <Container className="shadow-container">
                    <h2>Resume</h2>
                    <p className="center">Download my resume <a href="https://docs.google.com/document/d/1gU5XflUFWsucu_gZsXpsxjS7mbhV3QjH/edit?usp=sharing&ouid=117658244105350147754&rtpof=true&sd=true">here</a></p>
                    <h2>Technical Proficiencies</h2>
                    <p className="center">HTML, CSS, JS, React, SQL, NoSQL, MongoDB, Git, Bootstrap, Web-based APIs, Node.js, Sequelize, Express.js, Oject Relational Mapping, Model View Controllers, Progressive Web Applications</p>
                </Container>
        </Container>
)
}

export default Resume;