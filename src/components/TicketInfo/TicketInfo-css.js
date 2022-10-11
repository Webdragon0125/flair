import styled from "styled-components";

import IMG_FLYING from '../../assets/flying-icon.png';
import IMG_FLYING1 from '../../assets/flying-icon1.png';
import IMG_FLYING2 from '../../assets/flying-icon2.png';
import IMG_FLYING3 from '../../assets/flying-icon3.png';

import { BUNDLE } from "../../constant/BUNDLE";

export const Wrapper = styled.div`
    margin: auto;
    .usage-mobile {
        padding: 20px;
        position: relative;
        .mobile-bundle {
            position: fixed;
            right: 0;
            background-color: white;
            width: 100%;
            height: 100%;
            z-index: 2;
            overflow: auto;
            transition: all .3s;
            top: ${p => p.mobileBundleFlag ? '0' : '100vh'};
            z-index: 101;
            
            .mobile-bundle-header {
                box-shadow: 0 0 10px #0003;
                .mobile-bundle-header-thm {
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    background-color: ${p => p.theme.themeColor1};
                    color: ${p => p.theme.fontColor1};
                }
                .mobile-bundle-header-posi {
                    padding: 10px;
                    .posi {
                        display: flex;
                        align-items: center;
                        img {
                            width: 20px;
                            margin-right: 10px;
                        }
                        p {
                            color: ${p => p.theme.themeColor1};
                        }
                    }
                    .datetime {
                        margin-left: 30px;
                        p {
                            font-size: 12px;
                        }
                    }
                }
            }
            .mobile-bundle-body {
                .mobile-bundle-body-items {
                    position: relative;
                    box-shadow: 0 0 10px #0003;
                    margin-top: 20px;
                    button {
                        position: absolute;
                        color: white;
                        border: 1px solid ${p => p.theme.themeColor1};
                        outline: 0;
                        background-color: white;
                        color: ${p => p.theme.themeColor1};
                        padding: 10px 20px;
                        border-radius: 20px;
                        top: -20px;
                        left: calc(50% - 60px);
                        font-size: 18px;
                    }
                    .header {
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 2px dotted ${p => p.theme.borderColor1};
                        .left {
                            p {
                                  /* color: ${p => p.theme.themeColor1}; */
                                font-size: 18px;
                            }
                        }
                        .right {
                            display: flex;
                            align-items: center;
                            gap: 20px;
                            div {
                                font-size: 15px;
                                p {
                                    
                                }
                                span {
                                    font-size: 12px;
                                    color: ${p => p.theme.borderColor1}
                                }
                            }
                            img {
                                width: 20px;
                                height: 20px;
                            }
                        }
                    }

                    .body {
                        padding: 10px;
                        .index {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            gap: 20px;
                            img {
                                height: 20px;
                            }
                            div {
                                p {
                                    font-size: 15px;
                                }
                                span {
                                    font-size: 12px;
                                    color: ${p => p.theme.borderColor1};
                                }
                            }
                        }
                    }
                }
            }
            .mobile-bundle-footer {
                display: flex;
                justify-content: flex-end;
                a {
                    outline: 0;
                    text-decoration: none;
                    border: 0;
                    padding: 5px 10px;
                    color: white;
                    font-size: 15px;
                    background-color: ${p => p.theme.themeColor1};
                    border-radius: 20px;;
                    margin: 10px;
                }
            }
        }

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
            button {
                position: absolute;
                bottom: 5px;
                right: 5px;
                border: 0;
                outline: 0;
                padding: 5px;
                background-color: ${p => p.theme.themeColor1};
                border-radius: 5px;
                color: white;
            }
        }
    }
    .usage-pc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 20px;
        margin: auto;
        color: ${p => p.theme.fontColor};

        @media screen and (max-width: 900px) {
            display: none;
            flex-direction: column;
            gap: 30px;
            border-radius: 20px;
            box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.09);
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
            cursor: pointer;
            text-align: center;
            background-color: ${p => p.theme.themeColor};
            border-radius: 30px;
            &:hover {
                & > p:nth-child(2) {
                    transition: all .2s;
                    transform: scale(1.2);
                }
            }
            & > p:nth-child(2) {
                color: ${p => p.theme.themeColor1};
                font-family: 'avatar-bold';
                font-size: 25px;
            }
            padding: 10px 30px;
            @media screen and (min-width: 900px) {
                left: 2px dotted ${p => p.theme.borderColor1};
            }
        }
    }
`