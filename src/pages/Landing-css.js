import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";

import IMG_STREAM from "../assets/stream.png";
import IMG_GET_READY_FLY from "../assets/get-ready-fly.png";

export const Wrapper = styled.div`
  /* animation-name: backgroundColorPalette;
	animation-duration: 10s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: ease-in-out; 

    @keyframes backgroundColorPalette {
        0% {
            background: #ee6055;
        }
        25% {
            background: #60d394;
        }
        50% {
            background: #aaf683;
        }
        75% {
            background: #ffd97d;
        }
        100% {
            background: #ff9b85;
        }
    } */

  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;

  .landing-first {
    position: relative;
    background-image: url(${(p) => p.bgImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #e6e3e3;

    background-position: center;
    background-attachment: fixed;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      background-size: auto 100%;
      background-position: right;
    }

    width: 100%;
    height: 100vh;

    overflow: hidden;

    z-index: 0;
    .search-for {
      font-weight: 900;
    }
    .search-for {
      padding: 50px 50px 30px 50px;
      h1 {
        font-size: 50px;
        font-weight: 900;
        color: #101010;
        @media screen and (max-width: 1130px) {
          font-size: 40px;
        }
        @media screen and (max-width: 768px) {
          font-size: 30px;
        }
      }
      ${(p) => {
        return css`
          @media screen and (max-width: ${(p) => p.theme.media1}) {
            text-align: center;
          }
        `;
      }}
    }
    .seperator {
      width: 100%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      position: absolute;
      top: -50%;
      left: -55%;

      transform: rotate(-20deg);
      backdrop-filter: blur(10px);

      z-index: -5;
    }
    /* .seperator1 {
      width: 100%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);

      position: absolute;
      top: -50%;
      left: 55%;

      transform: rotate(-20deg);

      z-index: -5;
    } */
  }

  .search-search-div {
    position: absolute;
    width: 100%;
    top: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-container {
      width: 70%;

      margin: auto;
      background-color: white;
      box-shadow: 3px 3px 6px 6px grey;
      padding: 20px 50px 20px 50px;
      .tickets {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 10%;
        img {
          height: 20px;
        }
        padding: 0 50px;
        select {
          font-size: 15px;
          font-weight: 900;
          border: 0;
          outline: 0;
        }
      }
      .search-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .region-search {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          position: relative;

          .search-swap {
            position: absolute;
            height: 20px;
            left: calc(50% - 15px);
            top: 2px;

            img {
              height: 30px;
              background-color: black;
              padding: 10px;
              border-radius: 50px;
            }
            @media screen and (max-width: 950px) {
              flex-direction: column;
              top: calc(50% - 20px);
            }
          }

          @media screen and (max-width: 950px) {
            flex-direction: column;
          }
        }

        @media screen and (max-width: ${(p) => p.theme.media1}) {
          flex-direction: column;
          gap: 20px;
        }
      }

      .data-search {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .search-parent-div {
        padding: 10px 50px;

        button {
          cursor: pointer;
          outline: 0;
          border: 0;
          color: ${(p) => p.theme.fontColor1};
          background-color: ${(p) => p.theme.themeColor1};

          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;
          padding: 20px 100px;
          font-size: 20px;
          font-weight: 600;
          border-radius: 50px;

          img {
            position: absolute;
            right: 20px;
            height: 30px;
          }
        }
      }
    }
  }

  .sun-of-beach {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .title {
      font-size: 40px;
      font-weight: 700;
    }
    img {
      width: 100%;
    }
  }

  .best-deals {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .title {
      font-size: 40px;
      font-weight: 700;
    }

    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  .get-ready-fly {
    width: 100%;
    min-height: 500px;
    background-image: url(${IMG_STREAM}), url(${IMG_GET_READY_FLY});
    background-size: cover;
    background-repeat: no-repeat;

    padding: 100px 50px;
    @media screen and (max-width: 550px) {
      padding: 100px 10px;
    }
    .get-ready-fly-content {
      color: white;
      width: 400px;
      @media screen and (max-width: 550px) {
        text-align: center;
        width: 100%;
      }
      h1 {
        font-size: 40px;
        margin: 20px 0;
        color: white;
        @media screen and (max-width: 550px) {
        }
      }
      h2 {
        color: white;
        font-size: 30px;
        margin: 20px 0;
      }

      button {
        border: 0;
        outline: 0;
        background-color: ${(p) => p.theme.themeColor1};
        padding: 10px 30px;
        font-size: 20px;
        color: ${(p) => p.theme.fontColor1};
        border-radius: 20px;

        text-decoration: none;
        color: transparent;
        letter-spacing: 5px;
        transition: all 0.5s;
        position: relative;
        &:before {
          content: "View all";
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 20px;
          top: 0;
          left: 100%;
          font-family: sans-serif;
          letter-spacing: 5px;
          transition: all 1s;
          height: 100%;
          width: 100%;
          position: absolute;
          transform: scale(0) rotatey(0);
          opacity: 0;
        }
        &:hover:before {
          transform: scale(1) rotatey(360deg);
          left: 0;
          opacity: 1;
        }
        &:after {
          content: "View all";
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          top: 0;
          left: 0;
          font-family: sans-serif;
          letter-spacing: 5px;
          transition: all 1s;
          height: 100%;
          width: 100%;
          position: absolute;
          transform: scale(1) rotatey(0);
          opacity: 1;
        }
        &:hover:after {
          transform: scale(0) rotatey(360deg);
          left: -100%;
          opacity: 0;
        }
      }
    }
  }
  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .title {
      font-size: 40px;
      font-weight: 700;
    }

    .items {
      flex-wrap: wrap;
      display: flex;
      flex-direction: "row";
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  }
  .feedbacks {
    .title {
      text-align: center;
      width: 100%;
      font-size: 40px;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        font-size: 30px;
      }
    }
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  width: 200px;
  border: 1px solid ${(p) => p.theme.borderColor1};
  outline: none;
  @media screen and (max-width: ${(p) => p.theme.media1}) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

export const WhereWeFly = styled.div`
  background-color: ${(p) => p.theme.mapColor};
  background-image: url(${(p) => p.img});
  background-repeat: no-repeat;
  background-position: 90% 90%;
  background-size: contain;
  width: 100%;
  min-height: 400px;
  padding: 50px;
  @media screen and (max-width: 1100px) {
    padding: 0;
    background-position: 50% 90%;
  }
  .content {
    @media screen and (max-width: 1100px) {
      padding: 50px;
      text-align: center;
    }
    h1 {
      font-size: 40px;
      font-weight: 900;
      margin: 20px;
      @media screen and (max-width: 400px) {
        font-size: 25px;
      }
    }
    p {
      font-size: 25px;
      margin: 20px;
      @media screen and (max-width: 400px) {
        font-size: 20px;
      }
    }

    button {
      border: 0;
      outline: 0;
      background-color: ${(p) => p.theme.themeColor1};
      color: ${(p) => p.theme.fontColor1};
      padding: 10px 30px;
      font-size: 20px;
      font-weight: bold;
      border-radius: 20px;
    }

    width: 50%;

    @media screen and (max-width: 1300px) {
      width: 40%;
    }
    @media screen and (max-width: 1100px) {
      width: 30%;
    }
    @media screen and (max-width: 1100px) {
      width: 100%;
      height: 400px;
      backdrop-filter: blur(15px);
    }
  }
`;
