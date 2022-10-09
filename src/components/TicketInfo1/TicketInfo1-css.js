import styled from "styled-components";

import IMG_FLYING from '../../assets/flying-icon.png';
import IMG_FLYING1 from '../../assets/flying-icon1.png';
import IMG_FLYING2 from '../../assets/flying-icon2.png';
import IMG_FLYING3 from '../../assets/flying-icon3.png';

export const Wrapper = styled.div`
    & > div:nth-child(1) {
        .pc-mode {
            max-width: ${p => p.theme.maxWidth};
            display: flex;
            @media screen and (max-width: 500px) {
                display: none;
            }
            justify-content: space-between;
            align-items: center;
            padding: 30px 20px;
            margin: auto;
            color: ${p => p.theme.fontColor};
            border-bottom: ${p => p.isOpen ? '1px' : '0px'} solid ${p => p.theme.borderColor1};
            @media screen and (max-width: 900px) {
                flex-direction: column;
                gap: 30px;
                border-radius: 20px;
            }
        
            .from-to {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                gap: 30px;
                @media screen and (max-width: 500px) {
                    flex-direction: column;
                    gap: 10px;
                }
                img {
                    height: 20px;
                    content: url(${IMG_FLYING});
                    @media screen and (max-width: 1320px) {
                        content: url(${IMG_FLYING1});
                    }
                    @media screen and (max-width: 1100px) {
                        content: url(${IMG_FLYING2});
                    }
                    @media screen and (max-width: 500px) {
                        content: url(${IMG_FLYING3});
                        width: 20px;
                        height: auto;
                    }
                }
                .posi-div {
                    .posi-p {
                        font-size: 25px;
                        font-weight: 900;
                        font-family: 'avatar-bold';
                        @media screen and (max-width: 1024px) {
                            font-size: 20px;
                        }
                        span {
                            font-size: 20px;
                            font-family: 'avatar-regular';
                            font-weight: 400;
                            margin: 5px;
                            @media screen and (max-width: 1024px) {
                                font-size: 15px;
                            }
                        }
                    }
                    .data-p {
                        font-size: 14px;
                        @media screen and (max-width: 1024px) {
                            font-size: 12px;
                        }
                        color: ${p => p.theme.themeColor1}
                    }
                }
            }
            .for-type {
                span {
                    color: ${p => p.theme.themeColor1};
                }
            }
            .show-price {
                text-align: center;
                & > p:nth-child(2) {
                    color: ${p => p.theme.themeColor1};
                    font-family: 'avatar-bold';
                }
                & > p:nth-child(3) {
                    color: ${p => p.theme.borderColor1};
                }
            }
        }

        .mobile-mode {
            width: 90%;
            margin: auto;
            display: none;
            @media screen and (max-width: 900px) {
                display: block;
            }
            .from-to {
                margin: auto;
                display: flex;
                justify-content: space-between;
                .from {
                    text-align: center;
                    p {
                        font-size: 20px;
                    }
                    span {
                        font-size: 15px;
                        color: ${p => p.theme.themeColor1};
                    }
                }
                .middle {
                    text-align: center;
                    p {
                        border-bottom: 1px solid ${p => p.theme.borderColor1};
                        padding-bottom: 5px;
                        margin-bottom: 5px;
                    }

                    span {
                        color: ${p => p.theme.themeColor1}
                    }
                }
            }
            .price {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
                span {
                    color: ${p => p.theme.themeColor1};
                    font-size: 20px;
                    font-family: 'avatar-bold';
                }
            }
        }
    }
`