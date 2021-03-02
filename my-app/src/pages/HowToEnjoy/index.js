import React, {Component} from 'react';
import {Card, Button, Carousel, CardColumns, DropdownButton, Dropdown} from 'react-bootstrap';

import step1 from '../../assets/step1.png';
import step2Cold from '../../assets/step2_cold.png';
import step2Hot from '../../assets/step2_hot.png';
import step3 from '../../assets/step3.png';
import ReactPlayer from "react-player"
import './styles.scss';

const HowToEnjoy = props => {
    
    return (
        <div className="steps">

            <div className="player-wrapper">
                <ReactPlayer
                    url="https://youtu.be/_4cZnSyoirw"
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls={false}
                />
            </div>

            <h3>How to Enjoy Your KONA</h3>
            <h4>Step One</h4>
            <p>Put 30gr (2.5Tbsp) of KONA.</p>
            <h4>Step Two - Pick Hot or Cold</h4>
            <p>Hot: Add 250ml hot water.</p>
            <p>Cold: Add 200ml hot water + 2 ice cubes.</p>
            <h4>Step Three</h4>
            <p>Enjoy your KONA.</p>

            <h3>Serving Tips</h3>
            <li>Add milk and decrease the amount of water accordingly for extra taste.</li>
            <li>You can pre-made your KONA and store inside fridge for up to 2 days.</li>

        </div>
    );
};

export default HowToEnjoy;

{/* <div className="card_wrap">
<Card className="card_style">
    <Card.Title className="card_title">Step 1 - Put 2.5tbsp (30gr) of KONA</Card.Title>
    <div className="border"></div> 
    <Card.Img src={step1} className="card_image"/>
</Card>
<Card className="card_style">
    <Card.Title className="card_title">Step 2 -  Pick HOT or COLD</Card.Title>
    <div className="border"></div> 
    <div className="step2_wrap">
        <div className="hot">
            <Card.Img src={step2Hot} className="card_image"/>
            <Card.Subtitle className="card_title">HOT: Add 250ml hot water</Card.Subtitle>
        </div>
        <div className="cold">
            <Card.Img src={step2Cold} className="card_image"/>
            <Card.Subtitle className="card_title">COLD: Add 200ml hot water + 2 ice cubes</Card.Subtitle>
        </div>
    </div>
</Card>
<Card className="card_style">
    <Card.Title className="card_title">Step 3 - Enjoy your KONA</Card.Title>
    <div className="border"></div> 
    <Card.Img src={step3} className="card_image"/>
</Card>
</div> */}