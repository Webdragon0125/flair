import styled from "styled-components";

export const Wrapper = styled.div`
    transition: max-height 1s;
    max-height: ${p => p.displayFlag ? '10000px' : '0'};
    overflow: hidden;
    border-top: ${p => p.displayFlag ? '1px' : '0'} solid ${p => p.theme.borderColor1};
    .bundles {
        & > h1:nth-child(1) {
            padding: 20px 100px;
            @media screen and (max-width: 1152px) {
                text-align: center;
                padding: 20px 0px;
            }
        }
        .bundle-items {
            display: flex;  
            align-items: flex-start;
            justify-content: center;
            gap: 50px;
            @media screen and (max-width: 1152px) {
                gap: 30px;
            }
            flex-wrap: wrap;
            /* height: 600px;
            @media screen and (max-width: 1120px){
                height: 1300px;
            } */
        }
    }

    .continue {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        a {
            border: 0;
            text-decoration: none;
            outline: 0;
            padding: 10px 30px;
            border-radius: 50px;
            background-color: ${p => p.theme.themeColor1};
            margin: 20px 30px 0 0;
            color: ${p => p.theme.fontColor1};
            font-size: 15px;
        }
    }
`