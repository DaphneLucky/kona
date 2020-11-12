import React, {useState} from 'react';
import ShopLeft from './../../assets/1.JPG';
import ShopRight from './../../assets/2.JPG';
import Slide1 from './../../assets/3.JPG';
import Slide2 from './../../assets/4.JPG';
import Slide3 from './../../assets/5.JPG';

import { connect } from 'react-redux';
import { addBasket } from './../../actions/addAction';

import {Card, Button, Carousel, CardDeck, DropdownButton, Dropdown} from 'react-bootstrap';

import styles from './styles.scss';

const Directory = props => {
    const [value,setValue]=useState('Pick Size');
    const handleSelect=(e)=>{
        alert(e);
        setValue(e)
    }
    console.log(props);
    return (
        <div className="directory">
            {/* <div className="wrap"> */}
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="slide"
                        src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="slide"
                        src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="slide"
                        src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                <div className="item">
                <CardDeck>
                    <Card>
                        <div className="card_img">
                            <Card.Img variant="top" src={Slide2} style={{width: '18rem',
                height: '18rem'}}/>
                        </div>
                        <Card.Body>
                        <Card.Title>Coffee + Creamer + Sugar</Card.Title>
                        <Card.Text>
                            Original
                        </Card.Text>
                        <Button variant="primary" onClick={() => props.addBasket('original')}>Add to Cart</Button> 
                        <DropdownButton id="dropdown-basic-button" title={value} onSelect={handleSelect}>
                            <Dropdown.Item eventKey="Uno (60gr)">Uno (60gr)</Dropdown.Item>
                            <Dropdown.Item eventKey="Dieci (360gr)">Dieci (360gr)</Dropdown.Item>
                            <Dropdown.Item eventKey="Mille (600gr)">Mille (600gr)</Dropdown.Item>
                        </DropdownButton>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="card_img" src={Slide1} style={{width: '18rem',
                height: '18rem'}}/>
                        <Card.Body>
                        <Card.Title>Coffee + Creamer + Sugar</Card.Title>
                        <Card.Text>
                            Matcha
                        </Card.Text>
                        <Button variant="primary" onClick={() => props.addBasket('matcha')}>Add to Cart</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>     

                </div>
                {/* <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopLeft})`
                    }}
                >
                    <a>
                        Shop Original
                    </a>
                </div>
                <div
                    className="item"
                    style={{backgroundImage: `url(${ShopRight})`}}
                >
                    <a>
                        Shop Matcha
                    </a>
                </div> */}

            {/* </div> */}
        </div> 
    );
};

export default connect(null, {addBasket})(Directory);