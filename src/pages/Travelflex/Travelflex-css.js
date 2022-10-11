import styled from "styled-components";

export const Wrapper = styled.div`
    .select-flight-div {
        max-width: ${p => p.theme.maxWidth};
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 100px;
        .label-flight-div {
            font-family: 'avatar-bold';
            font-size: 25px;
            position: relative;
            span {
                position: absolute;
                font-size: 10px;
            }
            @media screen and (max-width: 978px) {
                width: 100%;
                text-align: center;
            }
        }
        @media screen and (max-width: 1140px) {
            margin: 20px 20px;
        }
        @media screen and (max-width: 978px) {
            
        }
        .select-flight {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
            .to-email {
                color: ${p => p.theme.themeColor1};
                font-family: 'avatar-bold';
                @media screen and (max-width: 600px) {
                    width: 100%;
                    text-align: center;
                }
            }
            .price {
                a {
                    color: black;
                }
                p {
                    font-family: 'avatar-bold';
                    color: ${p => p.theme.themeColor1};
                    font-size: 25px;
                }
            }
        }
    }

    .travelflex-div {
        max-width: ${p => p.theme.maxWidth};
        border: 1px solid ${p => p.theme.borderColor1};
        margin: 20px auto;
        padding: 30px;
        border-radius: 30px;

        @media screen and (max-width: 550px) {
            margin: 20px 20px;
            padding: 10px;
        }

        @media screen and (max-width: 400px) {
            border: 0;
        }

        .travelflex-div-header {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            flex-wrap: wrap;
            @media screen and (max-width: 550px) {
                justify-content: center;
            }
            .perks {
                div {
                    p {
                        font-family: 'avatar-bold';
                        font-size: 25px;
                    }
                    & > p:nth-child(1) {
                        position: relative;
                        span {
                            font-size: 10px;
                            position: absolute;
                            top: 5px;
                            margin-left: 2px;
                        }
                    }
                    display: flex;
                    gap: 15px;
                }
                .p-peace {
                    color: ${ p => p.theme.themeColor1 };
                }
            }
            .buttons {
                border: 0;
                outline: 0;
                font-family: 'avatar-bold';
                padding: 10px 30px;
                font-size: 25px;
                color: white;
                background-color: ${p => p.theme.themeColor1};
                border-radius: 20px;
            }
        }

        .checked-list {
            margin-top: 50px;
            div {
                margin: 20px 0;
                display: flex;
                gap: 10px;
                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .p1 {
            font-family: 'avatar-bold';
            font-size: 20px;
            margin: 30px 0;
        }
        .travelflex-choose-div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            .header {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
                img {
                    height: 20px;
                }
                div {
                    display: flex;
                    align-items: flex-end;
                    gap: 5px;
                    p {
                        font-family: 'avatar-bold';
                        font-size: 20px;
                    }
                    span {
                        color: ${p => p.theme.themeColor1};
                    }
                }
            }
            .travelflex-choose {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-top: 50px;
                flex-wrap: wrap;
            }
        }
        .big-letter {
            margin-top: 100px;
            font-family: 'avatar-bold';
            font-size: 30px;
        }
        .themecolored-letter {
            color: ${p => p.theme.themeColor1};
            margin: 20px 0;
        }
        .noted {
            display: flex;
            align-items: center;
            gap: 10px;
            img {
                width: 20px;
                height: 20px;
            }
        }
        .normal {
            span {
                color: ${p => p.theme.themeColor1};
            }
            margin: 30px 0;
        }
    }
    .passenger-buttons {
        margin: 30px 100px;
        display: flex;
        justify-content: flex-end;
        gap: 30px;
        @media screen and (max-width: 550px) {
            margin: 30px 20px;
        }
        a {
            padding: 10px 20px;
            border-radius: 50px;
            outline: 0;
            font-size: 15px;
            font-family: 'avatar-bold';
            text-decoration: none;
        }
        .info {
            border: 1px solid ${p => p.theme.themeColor1};
            color: ${p => p.theme.themeColor1};
        }
        .continue {
            background-color: ${p => p.theme.themeColor1};
            color: white;
            border: 0;
        }
    }
    
`