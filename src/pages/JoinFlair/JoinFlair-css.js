import styled from "styled-components";

export const Wrapper = styled.div`
    .join-container {
        max-width: ${p => p.theme.maxWidth};
        margin: auto;
        margin-top: 50px;
        .label {
            font-family: 'avatar-bold';
            font-size: 30px;
        }
        .join-form {
            padding: 20px;
            border: 1px solid ${p => p.theme.borderColor1};
            border-radius: 20px;
            margin-top: 30px;
            .big-label {
                font-family: 'avatar-bold';
                font-size: 40px;
            }
            .join-form-body {
                margin-top: 50px;
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;
                .sms {
                    display: flex;
                    gap: 10px;
                }
            }
        }
        .register-button {
            display: flex;
            justify-content: flex-end;
            padding: 50px;
            button {
                font-family: 'avatar-bold';
                font-size: 30px;
                padding: 20px 30px;
                border: 0;
                outline: 0;
                background-color: ${p => p.theme.themeColor1};
                color: white;
                border-radius: 50px;
            }
        }
    }
`