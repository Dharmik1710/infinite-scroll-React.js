import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    background-color: #FFB61E;
    padding: 10px;
    font-family: 'Nunito',sans-serif;
    font-size: 30px;
    font-weight: bolder;
    align-items: center;
    display: flex;
`;

const Float_l = styled.span`
    float: left;
    margin: 0 auto 0 0;
    font-size: 15px;
`;

const Float_r = styled.div`
    float: right;
    font-size: 15px;
    margin: 0 0 0 auto;
`;

export const Heading = () => {
    return (
        <div>
            <DIV>
                <Float_l>YELLOW CLASS</Float_l>
                INFINITE PHOTO FEED
                <Float_r>DHARMIK PATEL</Float_r>
            </DIV>
        </div>
    )
}