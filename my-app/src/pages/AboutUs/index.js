import React, {Component} from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap';

import './styles.scss';

import pic1 from '../../assets/kona_people/1.jpg';
import pic2 from '../../assets/kona_people/2.jpg';
import pic3 from '../../assets/kona_people/3.jpg';
import pic4 from '../../assets/kona_people/4.jpg';
import pic5 from '../../assets/kona_people/5.JPG';
import pic6 from '../../assets/kona_people/6.JPG';

const AboutUs = props => {
    
        return (
            <div className="about-us">
                <h3>
                    ABOUT US
                </h3>
                <h4>We are coffee enthusiasts based in Melbourne. We believe in the future of coffee and how coffee can put a smile in peoples' faces. </h4>
                <h3>#KONAPeople</h3>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Image src={pic1} className="images" rounded />
                        </Col>
                        <Col sm={4}>
                            <Image src={pic3} className="images" rounded />
                        </Col>
                        <Col sm={4}>
                            <Image src={pic2} className="images" rounded />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Image src={pic4} className="images" rounded />
                        </Col>
                        <Col sm={4}>
                            <Image src={pic5} className="images" rounded />
                        </Col>
                        <Col sm={4}>
                            <Image src={pic6} className="images" rounded />
                        </Col>
                    </Row>
                 </Container>
            </div>
        );
}

export default AboutUs;
