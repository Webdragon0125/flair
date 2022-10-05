import styled from "styled-components";

import IMG_FLYING from '../../assets/flying-icon.png';
import IMG_FLYING1 from '../../assets/flying-icon1.png';
import IMG_FLYING2 from '../../assets/flying-icon2.png';
import IMG_FLYING3 from '../../assets/flying-icon3.png';

export const Wrapper = styled.div`
    & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        background-color: ${p => p.theme.themeColor};
        color: ${p => p.theme.fontColor};
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 400px) {
            width: 90%;
        }
        border-radius: 50px;
        gap: 30px;
        @media screen and (max-width: 600px) {
            flex-direction: column;
            gap: 10px;
        }
        img {
            height: 20px;
            content: url(${IMG_FLYING});
            @media screen and (max-width: 1024px) {
                content: url(${IMG_FLYING1});
            }
            @media screen and (max-width: 768px) {
                content: url(${IMG_FLYING2});
            }
            @media screen and (max-width: 600px) {
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
            }
        }
    }
`;
