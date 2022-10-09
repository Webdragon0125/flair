import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    .tickets {
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }
    .inform1 {
        & > div:nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px auto;
            font-size: 20px;
            @media screen and (max-width: 1000px) {
                flex-direction: column;
                gap: 30px;
                text-align: center;
            }
            @media screen and (max-width: 500px) {
                font-size: 15px;
                margin: 0px 10px;
                gap: 10px;
                margin-bottom: 20px;
            }
        }
    }
    .ticket-infos {
        & > div:nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            display: flex;
            margin: auto;
            /* background-color: red; */
            .ticket-infos-div {
                margin: auto;
                width: 100%;
                .ticket-item {
                    border-radius: 30px;
                    border: 1px solid ${p => p.theme.borderColor1};
                    @media screen and (max-width: 500px) {
                        border-radius: 0px;
                        border: 0;
                        margin: 5px;
                        box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, .1);
                        margin-bottom: 10px;
                    }
                    margin-bottom: 30px;
                    padding-bottom: 30px;
                }
            }
        }
    }
    .annunciation {
        & > div:nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            margin: 20px auto;
            @media screen and (max-width: 768px) {
                padding: 20px 50px;
                text-align: center;
            }
            .ann-index {
                & p:nth-child(1) {
                    font-size: 30px;
                    margin: 20px 0;
                }
                & p:nth-child(2) {
                    line-height: 20px;
                    a {
                        color: ${p => p.theme.themeColor1};
                        text-decoration: none;
                    }
                }
            }
            margin-bottom: 100px;
        }
    }
`;
