import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getNumbers } from './../../actions/getAction';


import Logo from './../../assets/brown_logo.jpeg';

const Header = props => {
    useEffect(() => {
        getNumbers();
    }, []);
    return(
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
    );
};

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers})(Header);
