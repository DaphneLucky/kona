import React, {useState} from 'react';
import ShopLeft from './../../assets/1.JPG';
import ShopRight from './../../assets/2.JPG';
import Slide1 from './../../assets/3.JPG';
import Slide2 from './../../assets/4.JPG';
import Slide3 from './../../assets/5.JPG';

import { connect } from 'react-redux';
import { addBasket } from './../../actions/addAction';

import { Link } from 'react-router-dom';

import {Card, Button, Carousel, CardColumns, DropdownButton, Dropdown} from 'react-bootstrap';

import './styles.scss';

const Directory = props => {
    const [value,setValue]=useState('Pick Size');
    const handleSelect=(e)=>{
        alert(e);
        setValue(e)
    }
    console.log(props);
    return (
        <div className="directory">
            <div id="bg"></div>
            <div className="wrap">
            <h2>OUR PRODUCTS</h2>
                <CardColumns>
                <div className="item-container">
                    <div className="item-left">
                    <Card style={{width: '25rem', boxShadow:'4px 4px 6px 0px rgba(50, 50, 50, 0.64)'}}>
                        <div className="card_img">
                            <Link to="/shop/original" className="buttonLink">
                            <Card.Img variant="top" src={Slide2} style={{width: '18rem', height: '18rem', display: 'block',margin: '3rem auto 1rem'}}/>
                            </Link>
                        </div>
                        <Card.Body>
                        <Card.Text>
                            Original
                        </Card.Text>
                        <Card.Title>From $2.00</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="item-right">
                    <Card style={{width: '25rem', boxShadow:'4px 4px 6px 0px rgba(50, 50, 50, 0.64)'}}>
                        <Link to="/shop/matcha" className="buttonLink">
                        <Card.Img variant="top" className="card_img" src={Slide1} style={{width: '18rem', height: '18rem', display: 'block',margin: '3rem auto 1rem'}}/>
                        </Link>
                        <Card.Body>
                        <Card.Text>
                            Matcha
                        </Card.Text>
                        <Card.Title>From $2.50</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                </CardColumns>     
                </div>

        </div> 
    );
};

export default connect(null, {addBasket})(Directory);