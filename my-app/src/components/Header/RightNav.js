import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 50%; right: 150px; 
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);

    li {
        padding: 18px 10px;
        a {
            font-size: 1.8rem;
            line-height: 1;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
        }
    }
    @media (max-width: 840px) {
        z-index: 9998;
        flex-flow: nowrap column;
        background-color: #DF8D3B;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;

const RightNav = ({open}) => {
    return(
            
                <Ul open={open}>
                    <li>
                        <Link to ="/">
                            Home
                        </Link>
                    </li>
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
                    
                </Ul>
            
    );
};


export default RightNav;
