import React, {useState} from 'react';
import ShopLeft from './../../assets/1.JPG';
import ShopRight from './../../assets/2.JPG';
import Slide1 from './../../assets/5.JPG';
import Slide2 from './../../assets/4.JPG';
import Slide3 from './../../assets/5.JPG';

import { connect } from 'react-redux';
import { addBasket } from './../../actions/addAction';

import { Link } from 'react-router-dom';

import {Card, Button, Carousel, CardColumns, DropdownButton, Dropdown} from 'react-bootstrap';

import './styles.scss';

const MatchaPage = props => {
    const [value,setValue]=useState('Pick Size');
    const handleSelect=(e)=>{
        alert(e);
        setValue(e)
    }
    console.log(props);
    return (
        <div className="product-detail-container">
            <div className="product-img">
                <img src={Slide1} alt="Original" />
            </div>
            <div className="product-desc">
                <h3>MATCHA</h3>
                <h5 className="ingredients">Coffee + Creamer + Sugar + Matcha</h5>
                <h4>Pick your size:</h4>
                <div className="price-size">
                    <span>60gr - $3.00</span>
                    {/* <span className="size">(60gr)</span> */}
                </div>

                <div className="price-size">
                    <span>360gr - $7.00</span>
                    {/* <span className="size">(360gr)</span> */}
                </div>

                <div className="price-size">
                    <span>600gr - $9.00</span>
                    {/* <span className="size">(600gr)</span> */}
                </div>

                <div className="price-size">
                    <span>1500gr - $16.00</span>
                    {/* <span className="size">(1500gr)</span> */}
                </div>
                
                <div className="sizes">
                    <span className="size-btn-start">
                        <Button variant="primary" onClick={() => props.addBasket("matcha60gr")}>60gr</Button>
                    </span>
                    <span className="size-btn">
                        <Button variant="primary" onClick={() => props.addBasket("matcha360gr")}>360gr</Button>
                    </span>
                    <span className="size-btn">
                        <Button variant="primary"onClick={() => props.addBasket("matcha600gr")}>600gr</Button>
                    </span>
                    <span className="size-btn">
                        <Button variant="primary"onClick={() => props.addBasket("matcha1500gr")}>1500gr</Button>
                    </span>
                </div>
                {/* <Button variant="primary" className="add-cart-btn" onClick={() => props.addBasket('matcha')}>Add to Cart</Button>  */}
            </div>
        </div> 
    );
};

export default connect(null, {addBasket})(MatchaPage);