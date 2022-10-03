import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    .tickets {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .inform1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 100px;
        font-size: 20px;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
            gap: 30px;
            text-align: center;
            @media screen and (max-width: 500px) {
                font-size: 15px;
                margin: 20px 40px;
            }
        }
    }
    .ticket-infos {
        .bundles {
            h1 {
                padding: 0 100px;
            }
            .bundle-items {
                display: flex;
                align-items: flex-start;
                justify-content: space-around;
                gap: 10px;
                flex-wrap: wrap;
                padding: 50px;
                height: 600px;
                @media screen and (max-width: 200px){
                    
                }
            }
        }
    }
`;
