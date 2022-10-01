import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Images
import IMG_LOGO from "../../assets/logo.png";
import IMG_RIGHT from "../../assets/right.png";
import IMG_RESPON from "../../assets/responsive.png";
import IMG_REMOVE from "../../assets/remove_inform.png";

// Components
import LeftIconedBtn from "../LeftIconedBtn/LeftIconedBtn";

// Styled components
import { Wrapper, HEADER_NavLink, ResponIcon } from "./Header-css";

import { HEADER } from "../../constant/HEADER";

const Header = ({ props }) => {
  const [respFlag, setRespFlag] = useState(false);

  const btnProps = {
    content: "sign in",
    img: IMG_RIGHT,
    colFlag: 1,
    displayFlag: 1,
  };

  useEffect(() => {
    respFlag
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [respFlag]);

  return (
    <Wrapper respFlag={respFlag}>
      <div className="logo">
        <img src={IMG_LOGO}></img>
      </div>
      <div className="navbars">
        {props.map((item, index) => (
          <div className="link-cont">
            <div className="link-wrapper">
              <HEADER_NavLink
                className="link hover-6"
                to={item.url}
                key={index}
                flag={item.flag}
              >
                <img src={item.img}></img>
                {item.content}
              </HEADER_NavLink>
            </div>
          </div>
        ))}
        <LeftIconedBtn props={btnProps}></LeftIconedBtn>
        <ResponIcon
          onClick={() => {
            setRespFlag(true);
            console.log(respFlag);
          }}
        >
          <img src={IMG_RESPON}></img>
        </ResponIcon>
      </div>
      <div className="div-responsive">
        <div className="content">
          <img
            className="remove"
            src={IMG_REMOVE}
            onClick={() => setRespFlag(false)}
          ></img>
          {HEADER.map((item, index) => (
            <div className="index" key={index}>
              <img src={item.img}></img>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
