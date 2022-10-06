import styled from "styled-components";

export const Wrapper = styled.div`
    display: ${p => p.displayFlag ? 'block':'none'};
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
`