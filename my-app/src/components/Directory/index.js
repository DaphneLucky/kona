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

                <div className="item">
                <CardDeck>
                    <Card>
                        <div className="card_img">
                            <Card.Img variant="top" src={Slide2} style={{width: '18rem', height: '18rem'}}/>
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
                        <Card.Img variant="top" className="card_img" src={Slide1} style={{width: '18rem', height: '18rem'}}/>
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
        </div> 
    );
};

export default connect(null, {addBasket})(Directory);