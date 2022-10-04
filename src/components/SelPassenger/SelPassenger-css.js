import styled from 'styled-components';

export const Wrapper = styled.div`
    @media screen and (min-width: 1920px) {
        transform: scale(1.4);
    }
    position: relative;
    width: 200px;
    .select-body {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        img {
            width: 20px;
        }
        span {
            font-size: 20px;
        }
    }
    .select-items {
        position: absolute;
        width: 400px;
        border: 1px solid ${p => p.theme.borderColor1};
        padding: 10px;
        background-color: white;
        z-index: 1000;
        @media screen and (max-width: 768px){
            left: -200px;
        }
        @media screen and (max-width: 450px){
            width: 280px;
            left: -150px;
        }
        @media screen and (max-width: 364px){
            width: 280px;
            left: -200px;
        }
        .item {
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > p:nth-child(1) {
                @media screen and (max-width: 364px){
                    /* width: 77%; */
                }
                & > p:nth-child(1) {

                }
                span {
                    color: ${p => p.theme.borderColor1};
                    font-size: 14px;
                }
            }
            .p-controller {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100px;
                margin-left: 20px;
                @media screen and (max-width: 450px){
                    min-width: 100px;
                }
                img {
                    width: 20px;
                    background-color: black;
                    padding: 5px;
                    border-radius: 50px;
                }
            }
        }
    }
`