import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    .select-flight-div {
        & > div:nth-child(1) {
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
                
            }
            .p1, .p3 {
                margin: 30px 0;
                font-family: 'avatar-bold';
            }
            .p2 {
                margin: 30px 0;
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
    }

    .anoun {
        & > div:nth-child(1) {
            max-width: ${p => p.theme.maxWidth};
            margin: 30px 100px;
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