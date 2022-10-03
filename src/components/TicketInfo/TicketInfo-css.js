import styled from "styled-components";

import IMG_FLYING from '../../assets/flying-icon.png';
import IMG_FLYING1 from '../../assets/flying-icon1.png';
import IMG_FLYING2 from '../../assets/flying-icon2.png';
import IMG_FLYING3 from '../../assets/flying-icon3.png';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 20px;
    color: ${p => p.theme.fontColor};
    margin: 20px;
    @media screen and (max-width: 900px) {
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
        text-align: center;
        & > p:nth-child(2) {
            color: ${p => p.theme.themeColor1};
            font-family: 'avatar-bold';
        }
        & > p:nth-child(3) {
            color: ${p => p.theme.borderColor1};
        }
    }
`