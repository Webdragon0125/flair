import styled from "styled-components";

export const Wrapper = styled.div`
    .select-flight-div {
        & > div:nth-child(1) {
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
    .personalisation {
        max-width: ${p => p.theme.maxWidth};
        margin: auto;
        margin-top: 50px;
        .label {
            font-family: 'avatar-bold';
            font-size: 30px;
            margin-left: 20px;
        }
        .personalisation-container {
            border: 1px solid ${p =>p.theme.borderColor1};
            border-radius: 30px;
            padding: 30px;
            .personalisation-tab {
                display: flex;
                gap: 20px;
                div {
                    p {
                        font-size: 25px;
                        font-family: 'avatar-bold';
                    }
                    padding: 10px 20px;
                    border-bottom: 2px solid ${p => p.theme.themeColor1};
                }
            }
            .personalisation-info {
                margin-top: 30px;
                margin-bottom: 30px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 20px;

                @media screen and (max-width: 550px) {
                    display: grid;
                    grid-template-columns: auto auto;
                }
             }
            .bags-road {
                display: flex;
                gap: 100px;
                flex-wrap: wrap;
                img {
                    width: 20px;
                }
                .bags-road-index {
                    margin-top: 50px;
                    .bags-road-index-head {
                        height: 100px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        & > p:nth-child(1) {
                            font-family: 'avatar-bold';
                            font-size: 20px;
                            span {
                                font-size: 13px;
                                margin-left: 5px;
                            }
                        }
                        & > p:nth-child(2) {
                            color: ${p => p.theme.themeColor1};
                        }
                    }
                    .bags-road-index-body {
                        div {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }

    .payment-billing-div {
        max-width: ${p => p.theme.maxWidth};
        margin: auto;
        margin-top: 100px;
        margin-bottom: 100px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
        }
        .payment-div {
            width: 40%;
            @media screen and (max-width: 1000px) {
                width: 90%;
            }
            .label {
                font-family: 'avatar-bold';
                font-size: 30px;
                margin-bottom: 30px;
            }
            .payment-body {
                padding: 30px 20px;
                border: 1px solid ${p => p.theme.borderColor1};
                border-radius: 30px;
                .price-list {
                    @media screen and (max-width: 400px){
                        width: 100%;
                    }
                    right: 0;
                    background-color: white;
                    .kind-of-money {
                        color: black;
                        font-family: 'avatar-bold';
                    }
                    .prices-list {
                        .price {
                            margin-top: 20px;
                            display: flex;
                            justify-content: space-between;
                            & > span:nth-child(1) {
    
                            }
                            & > span:nth-child(2) {
                                color: ${p => p.theme.themeColor1}
                            }
                        }
                    }
                    .total-price {
                        margin-top: 20px;
                        padding-top: 10px;
                        border-top: 1px solid ${p => p.theme.borderColor1};
                        text-align: end;
                    }
                    .invoice-total {
                        margin-top: 20px;
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid ${p => p.theme.borderColor1};
                        padding-top: 20px;
                        div {
                            p {
                                color: black !important;
                                font-size: 16px !important;
                                font-family: 'avatar-regular' !important;
                            }
                            span {
                                font-size: 10px;
                                color: ${p => p.theme.borderColor1};
                            }
                        }
                        & > div:nth-child(2) {
                            text-align: right;
                        }
                    }
                    .label-promo-code {
                        color: ${p => p.theme.themeColor1};
                        font-size: 16px !important;
                        font-family: 'avatar-regular' !important;
                        margin: 20px 0;
                    }
                }
            }

            .pay-div {
                text-align: center;
                margin-top: 50px;
                & > div:nth-child(2) {
                    margin-top: 50px;
                    display: flex;
                    gap: 30px;
                    justify-content: center;
                    button {
                        border: 2px solid black;
                        outline: 0;
                        display: flex;
                        align-items: center;
                        background-color: white;
                        border-radius: 10px;
                        font-size: 30px;
                        img {
                            width: 35px;
                        }
                    }
                }
            }
        }
        .billing-div {
            width: 40%;
            @media screen and (max-width: 1000px) {
                width: 90%;
            }
            .label {
                font-family: 'avatar-bold';
                font-size: 30px;
                margin-bottom: 30px;
            }
            .billing-body {
                padding: 30px 20px;
                padding-top: 50px;
                border: 1px solid ${p => p.theme.borderColor1};
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                gap: 30px;
                .desc {
                    p {
                        font-size: 18px;
                        span {
                            font-family: 'avatar-bold';
                        }
                        a {
                            text-decoration: none;
                            color: ${p => p.theme.themeColor1};
                        }
                    }
                }
                .condi {
                    font-size: 15px;
                    .checkbox {
                        display: flex;
                        input {
                            margin-right: 5px;
                        }
                    }
                    & div:nth-child(2) {
                        margin-left: 20px;
                        a {
                            text-decoration: none;
                            color: ${p => p.theme.themeColor1};
                        }
                    }
                }

                button {
                    outline: 0;
                    border: 0;
                    font-family: 'avatar-bold';
                    font-size: 30px;
                    padding: 20px 30px;
                    background-color: ${p => p.theme.themeColor1};
                    border-radius: 50px;
                    color: white;
                }
            }
        }
    }
`