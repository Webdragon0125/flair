import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    .select-flight-div {
        & > div:nth-child(1) {
            position: relative;
            max-width: ${p => p.theme.maxWidth};
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 100px;
            margin: 20px auto;
            gap: 20px;
            flex-wrap: wrap;
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
                    .show-price {
                        position: absolute;
                        padding: 30px 20px;
                        border: 1px solid ${p => p.theme.borderColor1};
                        border-radius: 30px;
                        width: 400px;
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
                                    color: black;
                                    font-size: 15px;
                                    font-family: 'avatar-regular';
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
                            font-size: 15px;
                            font-family: 'avatar-regular';
                            margin: 20px 0;

                        }
                    }
                }
            }
        }
    }

    .personalise-div {
        & > div:nth-child(1) {
            margin: auto;
            max-width: ${p => p.theme.maxWidth};
            @media screen and (max-width: 550px) {
                margin: 0 20px;
            }
            border: 1px solid ${p => p.theme.borderColor1};
            padding: 30px;
            border-radius: 20px;
            .tickets {
                display: flex;
                gap: 20px;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                & > div:nth-child(1) {
                    display: flex;
                    gap: 20px;
                }
                button {
                    border: 0;
                    outline: 0;
                    background-color: ${p => p.theme.themeColor1};
                    color: white;
                    font-family: 'avatar-bold';
                    font-size: 20px;
                    padding: 10px 20px;
                    border-radius: 50px;
                }
            }
            .kind-seat {
                margin: 30px 0;
                display: flex;
                gap: 30px;
                flex-wrap: wrap;
                .kind {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    font-size: 20px;
                }
            }

            .quick-select {
                display: flex;
                align-items: center;
                justify-content: space-between;
                button {
                    border: 0;
                    outline: 0;
                    background-color: ${p => p.theme.themeColor1};
                    color: white;
                    font-family: 'avatar-bold';
                    font-size: 25px;
                    padding: 10px 50px;
                    border-radius: 50px;
                }
            }
            .seats-descs {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                gap: 30px;
                margin-top: 50px;
            }
            .seat-map {
                margin-top: 100px;
                overflow: scroll;
                .seat-map-container {
                    display: flex;
                    justify-content: space-between;
                    width: 1000px;
                    margin: auto;
                    .abc-block {
                        width: 400px;
                        .abc-block-header {
                            display: flex;
                            justify-content: space-between;
                            span {
                                font-size: 30px;
                                width: 40px;
                                height: 40px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 40px;
                            }
                            margin-bottom: 50px;
                        }
                        .abc-body {
                            div {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-top: 60px;
                                span {
                                    width: 40px;
                                    height: 40px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    border-radius: 50px;
                                }
                            }
                        }
                    }
                    .coordinates {
                        .coordinates-header {
                            display: flex;
                            justify-content: space-between;
                            span {
                                font-size: 30px;
                                width: 40px;
                                height: 40px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 40px;
                                opacity: 0;
                            }
                            margin-bottom: 50px;
                        }
                        .coordinates-body {
                            div {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-top: 60px;
                                span {
                                    width: 40px;
                                    height: 40px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    border-radius: 50px;
                                    color: ${p => p.theme.borderColor1};
                                    font-size: 20px;
                                }
                            }
                        }
                    }
                }
            }
            .p1 {
                margin: 30px 0;
                font-family: 'avatar-bold';
            }
            .p2 {
                margin: 30px 0;
            }
            .p3 {
                font-family: 'avatar-bold';
                font-size: 30px;
                color: ${p => p.theme.themeColor1};
                margin-top: 20px;
                margin-bottom: 30px;
            }
            .p4 {
                margin: 50px 20px;
                margin-left: 0;
                font-family: 'avatar-bold';
                font-size: 30px;
            }
            .priorities {
                display: flex;
                align-items: flex-start;
                gap: 30px;
                flex-wrap: wrap;
                @media screen and (max-width: 790px) {
                    align-items: center;
                    justify-content: center;
                }
            }
            .bigbutton {
                margin: 50px 20px;
                border: 1px solid ${p => p.theme.themeColor1};
                border-radius: 50px;
                padding: 20px 30px;
                font-size: 20px;
                color: ${p => p.theme.themeColor1};
            }
            .special-item-tabbar {
                display: flex;
                gap: 20px;
                
                .items {
                    p {
                        font-size: 20px;
                        font-family: 'avatar-bold';
                    }
                    padding: 0 20px 20px 20px;
                    border-bottom: 2px solid ${p => p.theme.themeColor1};
                }
            }
            .special-items {
                display: flex;
                gap: 30px;
                flex-wrap: wrap;
                @media screen and (max-width: 600px) {
                    flex-direction: column;
                    align-items: center;
                }
                .items {
                    width: 200px;
                    & > div:nth-child(1) {
                        display: hidden;
                        padding: 40px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        text-align: center;
                        img {
                            height: 70px;
                            margin-bottom: 20px;
                        }
                        & > p:nth-child(2) {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                        & > p:nth-child(3) {
                            font-size: 20px;
                            font-family: 'avatar-bold';
                        }
                        border-radius: 20px;
                        box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.09);
                    }
                    & > div:nth-child(2) {
                        margin: auto;
                        width: min-content;
                        margin-top: 30px;;
                        button {
                            outline: 0;
                            border: 0;
                            background-color: ${p => p.theme.themeColor1};
                            color: white;
                            padding: 10px 20px;
                            font-size: 20px;
                            border-radius: 20px;
                        }
                    }
                }
            }
        }
    }
    .passenger-buttons {
        & > div:nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            margin: 30px auto;
            display: flex;
            justify-content: flex-end;
            gap: 30px;
            a {
                padding: 20px 30px;
                border-radius: 50px;
                outline: 0;
                font-size: 25px;
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
    }

    .anoun {
        & > div:nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            margin: 30px auto;
            color: ${p => p.theme.borderColor1};
            .bold {
                font-family: 'avatar-bold';
                font-size: 30px;
                margin: 30px 0;
            }
            .thin {
                a {
                    color: ${p => p.theme.themeColor1};
                    text-decoration: none;
                }
            }
            padding-bottom: 50px;
            @media screen and (max-width: 550px) {
                margin: 30px 30px;
            }
        }
    }
`

export const Tickets = styled.div`
    & > p:nth-child(1) {
        span {
            font-family: 'avatar-bold';
            font-size: 20px;
        }
        margin-bottom: 10px;
    }
    & > p:nth-child(2) {
        color: ${p => p.theme.themeColor1};
    }

    padding: 20px 0;
    ${p => {
        if (p.props.flag) {
            return css`
                border-bottom: 1px solid ${p => p.theme.themeColor1};
            `
        }
    }}
`

export const Priority = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    min-width: 300px;
    img {
        margin-top: 30px;
        width: 100px;
    }
    .priority-desc {
        font-family: 'avatar-bold';
    }
    padding: 30px;
    border-radius: 30px;
    ${p => {
        if (p.props.checked) {
            return css`
                box-shadow: 10px 10px 15px 15px rgba(0, 0, 0, 0.08);
            `
        } else {
            return css`
                border: 1px solid ${p.theme.borderColor1};
            `
        }
    }}
    .money {
        color: ${p => p.theme.themeColor1};
    }
    .priority-check {
        img {
            width: 15px;
            height: 15px;
            padding: 15px;
            border-radius: 50px;
            ${p => {
                if (p.props.checked) {
                    return css`
                        background-color: ${p => p.theme.themeColor1};
                    `
                } else {
                    return css`
                        background-color: white;
                        border: 1px solid ${p => p.theme.borderColor1};
                    `
                }
            }}
        }
    }

    .recommend {
        position: absolute;
        border: 1px solid ${p => p.theme.themeColor1};
        outline: 0;
        background-color: white;
        color: ${p => p.theme.themeColor1};
        padding: 10px 20px;
        border-radius: 20px;
        top: -10px;
        right: 20px;
        display: ${p => p.props.recommend ? 'block' : 'none'};
    }
`