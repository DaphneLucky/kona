import React from 'react';
import ShopLeft from './../../assets/1.JPG';
import ShopRight from './../../assets/2.JPG';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopLeft})`
                    }}
                >
                    <a>
                        Shop Original
                    </a>
                </div>
                <div
                    className="item"
                    style={{backgroundImage: `url(${ShopRight})`}}
                >
                    <a>
                        Shop Matcha
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;