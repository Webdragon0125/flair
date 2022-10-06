import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid ${p => p.theme.borderColor1};
    height: 125px;
    width: 370px;
    border-radius: 20px;
    gap: 30px;
    @media screen and (max-width: 550px) {
        width: 100%;
        height: 200px;
    }
    & > div:nth-child(1) {
        display: flex;
        .svg {
            min-width: 20px;
            svg {
                margin-top: 5px;
            }
        }
        .desc {
            p {
                color: ${p => p.theme.borderColor1};
                margin: 0px 0 10px 10px;
            }
            span {
                color: ${p => p.theme.themeColor1};
                margin: 0px 0 10px 10px;
            }
        }
    }
    img {
        width: 30px;
        height: 30px;
        margin: auto 0;
    }
`