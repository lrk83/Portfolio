import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'semantic-ui-react';
import Hero from '../Components/homepage-components/Hero';
import About from '../Components/homepage-components/About';

const HomePage = () => {

    useEffect(()=>{
        AOS.init({
            duration:200
        })
    });

    return ( <>
        <Hero></Hero>
        <Container className="big-container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500" >
            
            <Container className="shadow-container" id="no-shadow">
                <About></About>
            </Container>
        </Container>
    </> )
}

export default HomePage;