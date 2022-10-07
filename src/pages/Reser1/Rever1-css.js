import styled from "styled-components";

export const Wrapper = styled.div`
    .select-flight-div {
        & > div:nth-child(1) {
            position: relative;
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
    }

    .ticket-infos {
        & > :nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            display: flex;
            margin: auto;
            justify-content: center;
            .kind {
                font-size: 20px;
            }
            .ticket-infos-div {
                margin: 50px 20px;
                width: 100%;
                .ticket-item {
                    border-radius: 30px;
                    border: 1px solid ${p => p.theme.borderColor1};
                    margin-bottom: 30px;
                }
            }
        }
    }

    .passenger-information-div {
        & > div:nth-child(1) {
            margin: 20px auto;
            max-width: ${p => p.theme.maxWidth};
            @media screen and (max-width: 600px) {
                margin: 20px 20px;
            }
            .label {
                font-family: 'avatar-bold';
            }
            .passenger-information {
                padding: 30px;
                border: 1px solid ${p => p.theme.borderColor1};
                margin-top: 30px;
                border-radius: 30px;
                .passenger-name {
                    font-family: 'avatar-bold';
                    font-size: 30px;
                    margin-bottom: 20px;
                }
                .passenger-note {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px;
                    img {
                        width: 20px;
                    }
                }
                .forms {
                    display: flex;
                    justify-content: space-around;
                    gap: 20px;
                    margin-top: 50px;
                    align-items: center;
                    flex-wrap: wrap;
                    .MuiFormControl-root.MuiTextField-root {
                        width: 100%;
                    }
                    @media screen and (max-width: 900px) {
                        flex-direction: column;
                        & > div {
                            width: 90% !important;
                        }
                    }
                }
                .receive-email-check {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    color: ${p => p.theme.borderColor1};
                    margin: 20px 10px;
                }
                .access-request {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    color: ${p => p.theme.borderColor1};
                }
            }
        }
    }
    .forget-something {
        max-width: ${p => p.theme.maxWidth};
        border: 1px solid ${p => p.theme.borderColor1};
        margin: 20px auto;
        padding: 50px;
        border-radius: 30px;
        margin-top: 100px;
        @media screen and (max-width: 600px) {
            margin: 20px 20px;
        }
        h1 {
            font-family: 'avatar-bold';
            text-align: center;
        }
        .somethings {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-top: 80px;
            flex-wrap: wrap;
            .something {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
                flex-wrap: wrap;
                
                div {
                    img {
                        height: 100px;
                    }
                    padding: 30px;
                    border-radius: 30px;
                    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
                }
                button {
                    border: 0;
                    outline: 0;
                    background-color: ${p => p.theme.themeColor1};
                    padding: 10px 30px;
                    color: white;
                    border-radius: 20px;
                    margin: 20px;
                }
            }
        }
    }
    .buttons {
        max-width: ${p => p.theme.maxWidth};
        display: flex;
        justify-content: flex-end;
        margin: 20px auto;
        gap: 30px;
        & > button:nth-child(1) {
            color: ${p => p.theme.themeColor1};
            font-family: 'avatar-bold';
            font-size: 20px;
            padding: 10px 20px;
            border: 1px solid ${p => p.theme.themeColor1};
            background-color: white;
            border-radius: 50px;
        }
        & > button:nth-child(2) {
            color: white;
            font-family: 'avatar-bold';
            font-size: 20px;
            padding: 10px 20px;
            background-color: ${p => p.theme.themeColor1};
            border-radius: 50px;
            border: 0;
        }
        @media screen and (max-width: 600px) {
            margin: 20px 20px;
        }
        margin-bottom: 100px;
    }
`