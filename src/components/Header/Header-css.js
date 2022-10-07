import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  .container {
    max-width: ${p => p.theme.maxWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 10px 10px;
  
    .div-responsive {
      border: 0;
      transition: all 0.3s;
      position: fixed;
      top: 0;
      right: ${(p) => (p.respFlag ? "0" : "100vw")};
      z-index: 200;
      height: 100vh;
      width: 100vw;
      backdrop-filter: grayscale(1) blur(5px);
      .content {
        border: 0;
        position: relative;
        padding: 100px 20px 0 20px;
        border-radius: 5px;
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.3);
        height: 100%;
        .remove {
          position: absolute;
          width: 25px;
          top: 20px;
          right: 20px;
        }
  
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        font-size: 30px;
        color: black;
  
        .index {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img {
            width: 25px;
            margin: 10px;
          }
        }
      }
    }
  
    .logo {
      cursor: pointer;
  
      img {
        height: 30px;
        @media screen and (min-width: 1920px) {
          transform: scale(1.6);
          margin-left: 50px;
        }
      }
    }
    .navbars {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
  
      .link-cont {
        position: relative;
      }
  
      .link {
        position: relative;
        text-decoration: none;
        padding: 10px 0;
        color: ${(p) => p.theme.fontColor};
      }
  
      .link-wrapper {
        position: relative;
        display: block;
        padding: 20px 0;
        font-family: 'avatar-bold';
      }
  
      .inner-wrapper {
        position: relative;
        display: inline-block;
      }
  
      /* hover styles */
  
      .hover-6 {
        &:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 50%;
          height: 3px;
          background-color: ${(p) => p.theme.themeColor1};
          transform: scaleX(0);
          transform-origin: bottom left;
  
          transition: transform 0.3s;
        }
  
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          left: 50%;
          height: 3px;
          background-color: ${(p) => p.theme.themeColor1};
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s;
        }
  
        &:hover {
          &:before {
            transform: scaleX(1);
          }
  
          &:after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
`;

export const HEADER_NavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
  }
  text-decoration: none;
  color: ${(p) => p.theme.fontColor};
  white-space: nowrap;

  ${(p) => {
    if (p.flag === 1) {
      return css`
        @media screen and (max-width: ${(p) => p.theme.media1}) {
          display: none;
        }
      `;
    }
  }}
`;

export const ResponIcon = styled.div`
  img {
    height: 20px;
  }
  display: none;

  ${(p) => {
    return css`
      @media screen and (max-width: ${(p) => p.theme.media1}) {
        display: block;
      }
    `;
  }}
`;
