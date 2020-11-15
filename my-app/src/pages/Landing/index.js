import React, {useEffect} from 'react';
import './styles.scss';

import Header from './../../components/Header';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getNumbers } from './../../actions/getAction';

import Logo from './../../assets/logo.jpeg';

const Landing = props => {
    useEffect(() => {
        getNumbers();
    }, []);

    return (

        <div className="body">
            <div id="bg"></div>
            <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to ="/">
                        <img src={Logo} alt="Kona LOGO"/>
                    </Link>
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to ="/shop">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to ="/howToEnjoy">
                                How to enjoy
                            </Link>
                        </li>
                        <li>
                            <Link to ="/aboutUs">
                                About Us
                            </Link>
                        </li>
                        <li>
                        <div className="cart">
                            <Link to ="/cart">
                                Cart <span>{props.basketProps.basketNumbers}</span>
                            </Link>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
            <div className="tagLine">
                <h1>Specially <br />
                    made for <br />
                    those <br />
                    who enjoy it!
                <Link to="/aboutUs" className="buttonLink">Learn More</Link>
                </h1>
            </div>

            <div className="konaImg">
                
            </div>
        </div>

    );
};

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers})(Landing);
