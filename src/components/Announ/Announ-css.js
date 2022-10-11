import styled from "styled-components";

export const Wrapper = styled.div`
    & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        margin: 20px auto;
        color: ${p => p.theme.borderColor1};
        .resp-pc {
            @media screen and (max-width: 768px) {
                padding: 20px 10px;
            }
            @media screen and (max-width: 768px) {
                display: none;
            }
            .ann-index {
                & p:nth-child(1) {
                    font-size: 30px;
                    margin: 20px 0;
    
                    @media screen and (max-width: 500px) {
                        font-size: 20px;
                    }
                }
                & p:nth-child(2) {
                    line-height: 20px;
                    a {
                        color: ${p => p.theme.themeColor1};
                        text-decoration: none;
                    }
                }
            }
        }

        .resp-mobile {
            display: none;
            @media screen and (max-width: 500px) {
                display: block;
                padding: 20px 10px;
            }
        }
        margin-bottom: 100px;
    }
`

export const MobileAnnoun = styled.div`
    margin: 20px 0;
    .resp-mobile-index-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10px;
        background-color: ${p => p.theme.themeColor};
        color: black;
        font-size: 20px;
        svg {
            transition: all .2s;
            transform: ${p => !p.flag ? 0 : 'rotate(45deg)'};
        }
    }
    .resp-mobile-index-body {
        border: 1px solid ${p => p.theme.borderColor1};
        transition: max-height .3s;
        padding: ${p => p.flag ? '10px' : '0'};
        max-height: ${p => p.flag ? '300px' : '0'};
        overflow: hidden;
    }
`