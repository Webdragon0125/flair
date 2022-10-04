import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    .tickets {
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }
    .inform1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 100px;
        font-size: 20px;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
            gap: 30px;
            text-align: center;
            @media screen and (max-width: 500px) {
                font-size: 15px;
                margin: 20px 40px;
            }
        }
    }
    .ticket-infos {
        display: flex;
        justify-content: center;
        .ticket-infos-div {
            margin: 50px;
            width: 80%;
            .ticket-item {
                border-radius: 30px;
                border: 1px solid ${p => p.theme.borderColor1};
                margin-bottom: 30px;
                padding-bottom: 30px;
                .bundles {
                    & > h1:nth-child(1) {
                        padding: 20px 100px;
                        @media screen and (max-width: 1152px) {
                            text-align: center;
                            padding: 20px 0px;
                        }
                    }
                    .bundle-items {
                        display: flex;  
                        align-items: flex-start;
                        justify-content: space-around;
                        gap: 10px;
                        @media screen and (max-width: 1152px) {
                            gap: 30px;
                        }
                        flex-wrap: wrap;
                        /* height: 600px;
                        @media screen and (max-width: 1120px){
                            height: 1300px;
                        } */
                    }
                }

                .continue {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    a {
                        border: 0;
                        text-decoration: none;
                        outline: 0;
                        padding: 10px 30px;
                        border-radius: 50px;
                        background-color: ${p => p.theme.themeColor1};
                        margin: 20px 30px 0 0;
                        color: ${p => p.theme.fontColor1};
                        font-size: 15px;
                    }
                }
            }
        }
    }
    .annunciation {
        padding: 20px 100px;
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
`;
