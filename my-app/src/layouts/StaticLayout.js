import React from 'react';
import Header from './../components/Header';
import StaticFooter from './../components/StaticFooter';

const StaticLayout = props => {
    return(
        <div>
            <Header />
            <div className="main">
                {props.children}
            </div>
            <StaticFooter />
        </div>
    );
};

export default StaticLayout;