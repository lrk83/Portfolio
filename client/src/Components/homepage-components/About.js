import React, { useEffect } from "react";
import coverImage from "../../assets/images/1564436137954.jpg"
import {Image, Header, Container} from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init({
      duration: 2000
    });
  });

    return (<Container className="about-container">
            <div className="image-box">
                <Image className="cover-image" src={coverImage}/>
            </div>
            <Container textAlign='left'>
                <p>
                I am a full Stack Web Developer with a background in the humanities and a unique perspective on tailoring the MERN stack to support creative and easy to use websites. I earned my certificate in Full Stack Web Development from the University of Texas Coding Boot Camp this fall. I am focussed on structuring back-end databases to smoothly serve end-user interactions, and designing mobile-first intuitive front-ends. A creative problem-solver with a conceptual orientation.
                </p>
              </Container>
          </Container>
    )
  }
  
  export default About