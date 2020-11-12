import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getNumbers } from './../../actions/getAction';


import Logo from './../../assets/logo.jpeg';

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
                            <Link to ="/registration">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to ="/cart">
                                Cart <span>{props.basketProps.basketNumbers}</span>
                            </Link>
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
