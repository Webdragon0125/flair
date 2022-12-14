import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const LeftIconedBtn = ({ props }) => {
  return (
    <CustomBtn colFlag={props.colFlag} displayFlag={props.displayFlag}>
      {props.content}
      <img src={props.img} />
    </CustomBtn>
  );
};

const CustomBtn = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  cursor: pointer;
  font-family: 'avatar-bold';
  font-size: 16px;
  white-space: nowrap;
  ${(p) => {
    return css`
      @media screen and (max-width: ${(p) => p.theme.media1}) {
        display: none;
      }
    `;
  }}
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 30px;

  img {
    height: 20px;
  }

  ${(p) => {
    if (p.colFlag === 1) {
      return css`
        background-color: ${p.theme.themeColor1};
        color: ${p.theme.fontColor1};
      `;
    }

    return css`
      color: ${p.theme.fontColor};
      background-color: transparent;
    `;
  }}
`;

export default LeftIconedBtn;
