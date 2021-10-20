import React, {useEffect} from 'react';
import { Container, Header} from 'semantic-ui-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePageHero = () => {

    useEffect(()=>{
        AOS.init({
            duration:200
        })
    });

    return (
        <Container className="big-container" id="home-page-hero">
            <Header as="h1" id="hero-header"  data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">About Me</Header>
        </Container>
    )
}

export default HomePageHero;