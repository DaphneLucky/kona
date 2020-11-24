import React, {useEffect} from 'react';
import './styles.scss';

import Header from './../../components/Header';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getNumbers } from './../../actions/getAction';
import Kona_bag from './../../assets/illustrated_bag.png';

const Landing = props => {
    useEffect(() => {
        getNumbers();
    }, []);

    return (

        <div className="body">
            <div id="bg"></div>
            <Header />
        
            <div className="tagLine">
                <h1>Specially <br />
                    made for <br />
                    those <br />
                    who enjoy it!
                <Link to="/aboutUs" className="buttonLink">Learn More</Link>
                </h1>
            </div>

            <div className="konaImg">
                <img src={Kona_bag}/>
            </div>
        </div>

    );
};

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers})(Landing);
