import React, {useState} from 'react';
import ShopLeft from './../../assets/1.JPG';
import ShopRight from './../../assets/2.JPG';
import Slide1 from './../../assets/3.JPG';
import Slide2 from './../../assets/4.JPG';
import Slide3 from './../../assets/5.JPG';
import matchaBag from './../../assets/matcha_bag.png';
import originalBag from './../../assets/original_bag.png';

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
            <div className="headings">
                <h2>KONA Coffee Store</h2>
                <p className="subtitle">We produce freshly roasted specialty coffee each day with an unmatched attention to detail. Each lot is carefully selected, profiled, tweaked and cupped rigorously before being made available to you.</p>
            </div>   
                <CardColumns>
                <div className="item-container">
                    <div className="item-left">
                    <Card style={{width: '25rem', boxShadow:'0px 0px 0.5px 0px rgba(50, 50, 50, 0.64)', backgroundColor:'#735235'}}>
                        <div className="card_img">
                            <Link to="/shop/original" className="buttonLink">
                            <Card.Img variant="top" src={originalBag} style={{width: '15rem', display: 'block',margin: '3rem auto 1rem'}}/>
                            </Link>
                        </div>
                        <Card.Body style={{backgroundColor:'white'}}>
                        <Card.Text>
                            Original
                        </Card.Text>
                        <Card.Title>From $2.00</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="item-right">
                    <Card style={{width: '25rem', boxShadow:'0px 0px 0.5px 0px rgba(50, 50, 50, 0.64)', backgroundColor:'#747c5b'}}>
                        <Link to="/shop/matcha" className="buttonLink">
                        <Card.Img variant="top" className="card_img" src={matchaBag} style={{width: '15rem', display: 'block',margin: '3rem auto 1rem'}}/>
                        </Link>
                        <Card.Body style={{backgroundColor:'white'}}>
                        <Card.Text>
                            Matcha
                        </Card.Text>
                        <Card.Title>From $3.00</Card.Title>
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