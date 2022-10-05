import styled, { css } from "styled-components";
import IMG_STREAM from "../../assets/stream.png";
import IMG_GET_READY_FLY from "../../assets/get-ready-fly.png";
import IMG_BACK1_RESP from '../../assets/back1-resp.png';

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


    @keyframes colorchange {
      0% {
        background: white;
      }
      50% {
        background: ${p => p.theme.themeColor};
      }
      100% {
        background: white;
      }
    }
    animation: colorchange 10s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-play-state: running;

    position: relative;
    background-position: center;
    background-attachment: fixed; 
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 30px;

    @media (max-width: 768px) {
      background-size: auto 100%;
      background-position: right;
    }
    width: 100%;
    min-height: 100vh;
    z-index: 0;
    .trip-kind-and-person {
      @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
      }
      & > div:nth-child(1) {
        width: 100%;
        max-width: ${p => p.theme.maxWidth};
        margin-top: 20px;
        @media screen and (min-width: 1400px) {
          margin-left: calc((100vw - 1320px) / 2);
        }
        @media screen and (max-width: 1400px) {
          margin-left: 50px;
        }
        @media screen and (max-width: 600px) {
          margin-left: 0px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: min-content;
        @media screen and (max-width: 768px) {
          width: 90%;
          justify-content: space-between;
        }
        .trip-kind {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          & > img:nth-child(1) {
            width: 30px;
            @media screen and (max-width: 500px) {
              display: none;
            }
          }
          select {
            border: 0;
            font-size: 18px;
            outline: 0;
            border-bottom: 1px solid black;
            box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 40%);
            border-radius: 5px;
            padding: 10px 20px;
            font-family: 'avatar-bold';
            font-size: 30px;
            @media screen and (max-width: 500px) {
              font-size: 25px;
            }
          }
        }
      }
    }

    .search-for {
      & > div:nth-child(1) {
        max-width: ${p =>p.theme.maxWidth};
        margin: auto;
        font-weight: 900;
        
        @media screen and (min-height: 1080px) {
          padding: 300px 50px 30px 50px;
        }
        @media screen and (max-height: 1080px) {
          padding: 150px 50px 30px 50px;
        }
        @media screen and (max-height: 768px) {
          padding: 50px 50px 30px 50px;
        }
        /* @media screen and (max-width: 1130px) {
          padding: 20px 20px 10px 20px;
        } */
        /* @media screen and (max-width: 1920px) { */
        /* } */
        h1 {
          font-size: 60px;
          font-weight: 900;
          color: #101010;
          font-family: 'avatar-bold';
          @media screen and (max-width: 1130px) {
            font-size: 40px;
          }
          @media screen and (max-width: 768px) {
            font-size: 30px;
          }
          @media screen and (max-width: 500px) {
            font-size: 25px;
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
    }

    .search-input-div {
      & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        margin: 50px auto;
        @media screen and (max-width: 1000px) {
          margin:5px 30px;
        }
        .search-position {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          gap: 30px;
          @media screen and (max-width: 670px) {
            flex-direction: column;
          }
          img {
            position: absolute;
            background-color: black;
            width: 25px;
            padding: 10px;
            border-radius: 50px;
            @media screen and (max-width: 670px) {
              transform: rotate(-90deg);
            }
          }
        }
        .search-date {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }

    .search-button-contain-div {
      & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        display: flex;
        margin: 50px auto;
        padding: 50px 0;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        @media screen and (max-width: 1500px) {
          padding: 0;
        }
        @media screen and (max-width: 600px) {
          margin: 0px auto;
          padding: 0px 0;
        }
        button {
          background-color: ${p => p.theme.themeColor1};
          border: 0;
          color: white;
          font-size: 20px;
          padding: 10px 100px;
          border-radius: 50px;
          position: relative;
          @media screen and (max-width: 1180px) {
            margin: auto;
          }
          img {
            position: absolute;
            height: 30px;
            right: 20px;
            top: calc(50% - 15px);
          }
        }
        
        .choose-what {
          @media screen and (max-width: 1180px) {
            margin: auto;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-weight: 900;
          font-size: 22px;
          flex-wrap: wrap;
          @media screen and (max-width: 500px) {
            gap: 5px;
          }
          div {
            white-space: nowrap;
          }
          .choose-wait-childs {
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
            div {
              background-color: ${p => p.theme.themeColor};
              padding: 5px 10px;
            }
            @media screen and (max-width: 500px) {
              gap: 5px;
            }
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
      font-size: 20px;
      font-weight: 700;
    }
    img {
      width: 100%;
      @media screen and (max-width: 768px) {
        content: url(${IMG_BACK1_RESP});
      }
    }
  }

  .best-deals {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      margin: 0 20px;
      flex-wrap: wrap;
      .title {
        font-size: 30px;
        font-weight: 700;
      }
      select {
        border: 0;
        font-size: 25px;
        outline: 0;
        font-weight: bold;
        border-bottom: 1px solid black;
        box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 40%);
        border-radius: 5px;
        padding: 10px 20px;
      }
    }

    .items {
      max-width: ${p => p.theme.maxWidth};
      display: flex;
      justify-content: center;
      align-items: center;

      .items-div {
        width: 90%;
        padding: 0 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
      }
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
