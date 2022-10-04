import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${p => p.theme.themeColor};
    margin: auto;
    padding: 20px 50px;
    width: 90%;
    border-radius: 50px;
    gap: 10px;
    @media screen and (max-width: 850px) {
        flex-direction: column;
    }
    img {
        height: 20px;
        margin-top: 20px;
    }
    p { 
        border-bottom: 1px solid ${p => p.theme.themeColor1};
        padding-bottom: 10px;
        width: 15%;
        text-align: center;
        white-space: nowrap;
        @media screen and (max-width: 850px) {
            width: 80%;
        }
    }
    ${p => {
        if (!p.props.isOpen) {
            return css`
                img {
                    display: none;
                    height: 20px;
                    @media screen and (max-width: 850px) {
                        display: block !important;
                    }
                }
                * {
                    display: none !important;
                }
                & > span:nth-child(${p => p.props.current * 2 - 1}) {
                    display: flex !important;
                }
            `;
        }
    }}

    & > span:nth-child(${p => p.props.current * 2 -1}) {
        color: white !important;
        background-color: black !important;
    }

    @media screen and (min-width: 850px) {
        span {
            display: flex !important;
        }
        p {
            display: block !important;
        }
        img {
            display: none !important;
        }
    }
`
export const StepFlag = styled.span`
    color: black;
    background-color: white;
    width: 35px;
    height: 35px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    @media screen and (max-width: 850px) {
        width: 80%;
    }
`