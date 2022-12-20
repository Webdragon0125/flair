import styled, { css } from "styled-components";
import IMG_STREAM from "../../assets/stream.png";
import IMG_GET_READY_FLY from "../../assets/get-ready-fly.png";
import IMG_BACK1_RESP from '../../assets/back1-resp.png';

export const Wrapper = styled.div`
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
        align-items: center;
      }
      @media screen and (max-width: 500px) {
        display: none;
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

        @media screen and (max-width: 500px) {
          width: auto;
          margin-bottom: 20px;
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
            outline: 0;
            border-bottom: 1px solid black;
            box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 40%);
            border-radius: 5px;
            
            font-family: 'avatar-bold';
            font-size: 30px;
            option {
              background-color: transparent;
            }
            padding: 10px 20px;
            @media screen and (max-width: 500px) {
              padding: 5px;
              font-size: 20px;
            }
          }
        }
      }
    }

    .search-for {
      & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        margin: auto;
        font-weight: 900;
        h1 {
          font-size: 60px;
          font-weight: 900;
          color: #101010;
          font-family: 'avatar-bold';
          span {
            font-family: 'avatar-bold';
          }
          @media screen and (max-width: 1130px) {
            font-size: 40px;
          }
          @media screen and (max-width: 768px) {
            font-size: 30px;
          }
          @media screen and (max-width: 500px) {
            margin: 30px auto;
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
        margin: 10px auto;
        @media screen and (max-width: 1000px) {
          margin:5px 30px;
        }
        @media screen and (max-width: 500px) {
          display: none;
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
      @media screen and (max-width: 500px) {
        display: none;
      }
      & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        display: flex;
        margin: 10px auto;
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
        .wrap {
          @media screen and (max-width: 500px) {
              margin: auto
            }
        }

        .button {
            position: relative;
            img {
              position: absolute;
              height: 30px;
              right: 20px;
              top: calc(50% - 15px);
            }
            
            min-width: 300px;
            min-height: 60px;
            font-family: 'avatar-bold';
            font-size: 20px;
            letter-spacing: 1.3px;
            font-weight: 700;
            color: white;
            background: #4FD1C5;
            background: ${p => p.theme.themeColor1};
            border: none;
            border-radius: 1000px;
            box-shadow: 12px 12px 24px rgba(140,10,200, .64);
            transition: all 0.3s ea-in-out 0s;
            cursor: pointer;
            outline: none;
            position: relative;
            padding: 10px;
          }

        button::before {
        content: '';
          border-radius: 1000px;
          min-width: calc(300px + 12px);
          min-height: calc(60px + 12px);
          border: 6px solid ${p => p.theme.themeColor1};
          box-shadow: 0 0 60px rgba(140,10,200,.64);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all .3s ease-in-out 0s;
        }

        .button:hover, .button:focus {
          transform: translateY(-6px);
        }

        button:hover::before, button:focus::before {
          opacity: 1;
        }

        button::after {
          content: '';
          width: 30px; height: 30px;
          border-radius: 100%;
          border: 6px solid ${p => p.theme.themeColor1};
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ring 3s infinite;
        }

        button:hover::after, button:focus::after {
          animation: none;
          display: none;
        }

        @keyframes ring {
          0% {
            width: 30px;
            height: 30px;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
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
              font-family: 'avatar-regular';
              background-color: ${p => p.theme.themeColor};
              padding: 5px 10px;
            }
            @media screen and (max-width: 500px) {
              gap: 5px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .search-button-mobile {
    display: none;
    @media screen and (max-width: 500px) {
      display: flex;
      justify-content: center;
      button {
        position: relative;
        img {
          position: absolute;
          height: 30px;
          right: 20px;
          top: calc(50% - 15px);
        }
        
        min-width: 300px;
        min-height: 60px;
        font-family: 'avatar-bold';
        font-size: 25px;
        letter-spacing: 1.3px;
        font-weight: 700;
        color: white;
        background: #4FD1C5;
        background: ${p => p.theme.themeColor1};
        border: none;
        border-radius: 1000px;
        box-shadow: 12px 12px 24px rgba(140,10,200, .64);
        transition: all 0.3s ea-in-out 0s;
        cursor: pointer;
        outline: none;
        position: relative;
        padding: 10px;
      }

      button::before {
        content: '';
        border-radius: 1000px;
        min-width: calc(300px + 12px);
        min-height: calc(60px + 12px);
        border: 6px solid ${p => p.theme.themeColor1};
        box-shadow: 0 0 60px rgba(140,10,200,.64);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
      }

      .button:hover, .button:focus {
        transform: translateY(-6px);
      }

      button:hover::before, button:focus::before {
        opacity: 1;
      }

      button::after {
        content: '';
        width: 30px; height: 30px;
        border-radius: 100%;
        border: 6px solid ${p => p.theme.themeColor1};
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ring 3s infinite;
      }

      button:hover::after, button:focus::after {
        animation: none;
        display: none;
      }

      @keyframes ring {
        0% {
          width: 30px;
          height: 30px;
          opacity: 1;
        }
        100% {
          width: 300px;
          height: 300px;
          opacity: 0;
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
            font-family: 'avatar-regular';
            background-color: ${p => p.theme.themeColor};
            padding: 5px 10px;
          }
          @media screen and (max-width: 500px) {
            gap: 5px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .search-location-mobile {
    position: relative;
    .reserve {
      width: 30px;
      top: calc(50% - 15px);
      right: 30px;
      position: absolute;
      transform: rotate(90deg);
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
    max-width: ${p => p.theme.maxWidth};
    margin: auto;
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
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
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

export const SearchMobileDiv = styled.div`
  position: fixed;
  transition: all .5s;
  top: ${p => p.flag ? '0' : '100vh'};
  width: 100vw;
  background-color: #f4f4f4;
  z-index: 106;
  
  & > div:nth-child(1) {
    min-height: 100vh;
    position: relative;

    .search {
      position: absolute;
      bottom: 10px;
      border: 0;
      outline: 0;
      left: 20px;
      width: calc(100vw - 40px);
      padding: 10px 20px;
      color: white;
      background-color: ${p => p.theme.themeColor1};
      border-radius: 30px;
      font-size: 16px;
    }

    .header-theme {
      background-color: ${p => p.theme.themeColor1};
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      color: white;
      img {
        height: 20px;
      }
    }
  
    .ticket-type {
      display: flex;
      box-shadow: 0 5px 20px -10px #000;
      margin-bottom: 20px;
      background-color: white;
      .return {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 3px 0;
        div {
          display: flex;
          align-items: center;
          svg {
            width: 50px;
            fill: ${p => p.mobileTypeFlag ? p.theme.themeColor1 : p.theme.borderColor1};
          }
          height: 50px;
        }
        p {
          color: ${p => p.mobileTypeFlag ? p.theme.themeColor1 : p.theme.borderColor1};
        }
      }
      .oneway {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        div {
          display: flex;
          align-items: center;
          svg {
            width: 50px;
            fill: ${p => !p.mobileTypeFlag ? p.theme.themeColor1 : p.theme.borderColor1};
          }
          height: 50px;
        }
        p {
          color: ${p => !p.mobileTypeFlag ? p.theme.themeColor1 : p.theme.borderColor1};
        }
      }
    }
  }
  
`

export const SunOfBeach = styled.div`
  max-width: ${p => p.theme.maxWidth};
  position: relative;
  gap: 30px;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  background-image: url(${p => p.backImg});
  width: 100%;
  height: 500px;
  margin: auto;
  @media screen and (max-width: 780px) {
    height: calc(100vh - 284px);
    margin-top: 30px;
  }
  @media screen and (max-width: 780px) {
    height: calc(100vh - 325px);
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  .title-div {
    position: absolute;
    /* width: min-content; */
    float: right;
    height: min-content;
    bottom: 40px;
    left: 50px;
    @media screen and (max-width: 780px) {
      top: 30px;
      right: 30px;
      text-align: center;
    }
    .title {
      font-family: 'avatar-bold';
      font-size: 60px;
      @media screen and (max-width: 780px) {
        font-size: 40px;
      }
    }
    div {
      @media screen and (max-width: 780px) {
        display: none;
      }
      p {
        font-family: 'avatar-bold';
      }
      font-size: 30px;
      a {
        font-family: 'avatar-bold';
        background-color: ${p => p.theme.themeColor1};
        color: white;
        padding: 5px 20px;
        text-decoration: none;
        border-radius: 50px;
        letter-spacing: 2px;
      }
    }
  }

  .ads-beach {
    position: absolute;
    bottom: 40px;
    right: 30px;
    width: 250px;
    padding: 20px;
    border-radius: 50%;
    text-align: center;
    @media screen and (max-width: 780px) {
      width: calc(100vw - 60px);
      height: 100px;
      border-radius: 5px;
      height: auto;
      bottom: 20px;
      padding: 0px;
    }
    p {
      font-family: 'avatar-bold';
      font-size: 40px;
      span {
        font-family: 'avatar-bold';
        white-space: block;
        font-size: 25px;
        display: inherit;
      }
    }
    background-color: ${p => p.theme.themeColor};
  }
  /* img {
    width: 100%;
    @media screen and (max-width: 768px) {
      content: url(${IMG_BACK1_RESP});
    }
  } */
`