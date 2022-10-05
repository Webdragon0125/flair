import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
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
                    & > a:nth-child(${p => p.props.current * 2 - 1}) {
                        display: flex !important;
                    }
                `;
            }
        }}
    
    
        @media screen and (min-width: 850px) {
            a {
                display: flex !important;
            }
            p {
                display: block !important;
            }
            img {
                display: none !important;
            }
        }
    }
`