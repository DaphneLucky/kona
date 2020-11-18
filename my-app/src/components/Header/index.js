import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getNumbers } from './../../actions/getAction';
import Burger from './Burger';

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
            <Burger />
                
            <div className="callToActions">
                <ul>
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
