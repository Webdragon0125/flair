import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  color: white;
  & > div:nth-child(1) {
    max-width: ${p => p.theme.maxWidth};
    margin: auto;
    .footer-body {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      padding: 50px;
      @media screen and (max-width: 600px) {
        padding: 50px 20px;
      }
      gap: 50px;
      .div-1 {
        width: 20%;
        @media screen and (max-width: 800px) {
          width: 30%;
        }
        @media screen and (max-width: 600px) {
          width: 40%;
        }
        .footer-logo {
          height: 50px;
        }
        p {
          font-size: 15px;
          font-weight: 100;
          margin-top: 30px;
        }
        h3 {
          font-weight: normal;
          margin: 30px 0 20px 0;
          font-size: 25px;
        }
        .contact {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
          img {
            height: 15px;
          }
        }
      }
      .div-3 {
        @media screen and (max-width: 900px) {
          display: none;
        }
      }
      .div-2 {
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
      .company {
        width: 20%;
        h1 {
          font-size: 20px;
          font-weight: 600;
          color: white;
          @media screen and (max-width: 450px) {
            font-size: 15px;
          }
        }
        .childs {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          a {
            text-decoration: none;
            color: ${(p) => p.theme.fontColor1};
          }
        }
      }
    }
    .footer-footer {
      border-top: 1px solid ${(p) => p.theme.borderColor1};
      width: 80%;
      margin: auto;
      text-align: center;
      padding-bottom: 20px;
      h1 {
        font-size: 15px;
        margin-top: 20px;
        font-weight: normal;
      }
    }
  }
`;
