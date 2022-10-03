import styled from "styled-components";

export const Wrapper = styled.div`
    border: ${p => p.checked ? 'none' : 'solid 1px '+p.theme.borderColor1};
    box-shadow: ${p => !p.checked ? 'none' : '5px 5px 10px 10px rgba(0, 0, 0, 0.08)'};
    padding: 20px 20px 0 30px;
    border-radius: 20px;
    min-height: 450px;
    width: 300px;
    position: relative;
    & > h1:nth-child(1) {
        font-size: 20px;
        font-family: 'avatar-bold';
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .fee-div {
        height: 50px;
        h2 {
            font-size: 15px;
            span {
                font-size: 18px;
                font-weight: 100;
            }
        }
        h3 {
            color: ${p => p.theme.borderColor1};
            font-size: 13px;
            font-weight: 100;
        }
    }
    .p-items {
        .p-items {
            display: flex;
            align-items: start;
            img {
                height: 25px;
                margin: 0 10px;
            }
            .p-item-info {
                & > p:nth-child(2) {
                    color: ${p => p.theme.borderColor1};
                    font-size: 12px;
                }
            }
            margin-bottom: 30px;
        }
    }
    .recommend {
        position: absolute;
        border: 1px solid ${p => p.theme.themeColor1};
        border-radius: 50px;
        padding: 5px 10px;
        color: ${p => p.theme.themeColor1};
        background-color: white;
        font-size: 14px;
        top: -10px;
        right: 20px;
    }
    .img-checked {
        position: absolute;
        top: 30px;
        right: 20px;
        img {
            height: 25px;
        }
    }
`