import React, { useState } from 'react';
import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';

import IMG_PERSON from '../../assets/person.png';
import IMG_SELECT_ALLOW from '../../assets/select-arrow.png';
import IMG_PLUS from '../../assets/plus.png';
import IMG_MINUS from '../../assets/minus.png';

const MobilePassengerSelect = ({ props }) => {
    return (
        <Wrapper displayFlag={props.displayFlag}>
            <div>
                <div className='header-theme'>
                    <p>passengers</p>
                    <FaTimes onClick={() => props.setDisplayFlag(false)}></FaTimes>
                </div>

                <div className='select-items'>
                    <div className='item'>
                        <p>
                            <p>Adults</p>
                            <span>12 years and older</span>
                        </p>
                        <div className='p-controller'>
                            <img src={IMG_MINUS} alt='' onClick={() => {
                                if (props.cntper[0] > 1) props.setCntper([props.cntper[0] - 1, props.cntper[1], props.cntper[2]]);
                            }}></img>
                            <p>{props.cntper[0]}</p>
                            <img src={IMG_PLUS} alt='' onClick={() => {
                                props.setCntper([props.cntper[0] + 1, props.cntper[1], props.cntper[2]]);
                            }}></img>
                        </div>
                    </div>
                    <div className='item'>
                        <p>
                            <p>Children</p>
                            <span>2-11 years at the time of travel</span>
                        </p>
                        <div className='p-controller'>
                            <img src={IMG_MINUS} alt='' onClick={() => {
                                if (props.cntper[1] > 0) props.setCntper([props.cntper[0], props.cntper[1] - 1, props.cntper[2]]);
                            }}></img>
                            <p>{props.cntper[1]}</p>
                            <img src={IMG_PLUS} alt='' onClick={() => {
                                props.setCntper([props.cntper[0], props.cntper[1] + 1, props.cntper[2]]);
                            }}></img>
                        </div>
                    </div>
                    <div className='item'>
                        <p>
                            <p>Babies</p>
                            <span>0-23 months at the time of travel</span>
                        </p>
                        <div className='p-controller'>
                            <img src={IMG_MINUS} alt='' onClick={() => {
                                if (props.cntper[2] > 0) props.setCntper([props.cntper[0], props.cntper[1], props.cntper[2] - 1]);
                            }}></img>
                            <p>{props.cntper[2]}</p>
                            <img src={IMG_PLUS} alt='' onClick={() => {
                                props.setCntper([props.cntper[0], props.cntper[1], props.cntper[2] + 1]);
                            }}></img>
                        </div>
                    </div>
                </div>
                <button className='apply' onClick={() => props.setDisplayFlag(false)}>apply</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    position: fixed;
    transition: all .5s;
    top: ${p => p.displayFlag ? '0' : '100vh'};
    z-index: 107;
    background-color: #f4f4f4;
    & > div:nth-child(1) {
        min-height: 100vh;
        position: relative;
        .header-theme {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${p => p.theme.themeColor};
            padding: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px #0000000d, 0 2px 4px #0000000f;
        }
    
        .select-items {
            padding: 10px;
            @media screen and (max-width: 768px){
                left: -200px;
            }
            @media screen and (max-width: 500px){
                left: -200px;
            }
            @media screen and (max-width: 364px){
                left: -200px;
            }
            .item {
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                & > p:nth-child(1) {
                    @media screen and (max-width: 364px){
                        /* width: 77%; */
                    }
                    & > p:nth-child(1) {
    
                    }
                    span {
                        color: ${p => p.theme.borderColor1};
                        font-size: 14px;
                    }
                }
                .p-controller {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100px;
                    margin-left: 20px;
                    @media screen and (max-width: 450px){
                        min-width: 100px;
                    }
                    img {
                        width: 20px;
                        background-color: black;
                        padding: 5px;
                        border-radius: 50px;
                    }
                }
            }
        }
        .apply {
            position: absolute;
            bottom: 10px;
            border: 0;
            outline: 0;
            left: 20px;
            width: calc(100vw - 40px);
            padding: 10px 20px;
            color: white;
            background-color: ${p => p.theme.themeColor1};
            border-radius: 30px;
            font-size: 16px;
        }
    }
`

export default MobilePassengerSelect;