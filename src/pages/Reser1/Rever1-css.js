import styled from "styled-components";

export const Wrapper = styled.div`
    .select-flight-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 100px;
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

    .ticket-infos {
        
        display: flex;
        justify-content: center;
        .kind {
            font-size: 20px;
        }
        .ticket-infos-div {
            margin: 50px;
            width: 80%;
            .ticket-item {
                border-radius: 30px;
                border: 1px solid ${p => p.theme.borderColor1};
                margin-bottom: 30px;
            }
        }
    }

    .passenger-information-div {
        margin: 20px 100px;
        .label {
            font-family: 'avatar-bold';
        }
        .passenger-information {
            padding: 30px;
            border: 1px solid ${p => p.theme.borderColor1};
            margin-top: 30px;
            border-radius: 30px;
            .passenger-name {
                font-family: 'avatar-bold';
                font-size: 30px;
                margin-bottom: 20px;
            }
            .passenger-note {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 10px;
                img {
                    width: 20px;
                }
            }
            .forms {
                
            }
        }
    }
`