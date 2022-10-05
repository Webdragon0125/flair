import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import IMG_FOOTER_LOGO from "../../assets/footer-logo.png";

import { CONTACTS } from "../../constant/CONTACT";
import { COMPANIES } from "../../constant/COMPANYS";
import { DESTINATIONS } from "../../constant/DESTINATIONS";
import { TRANDING_ROUTES } from "../../constant/TRENDING_ROUTES";

// Styled-components
import { Wrapper } from "./Footer-css";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <div className="footer-body">
          <div className="div-1">
            <img src={IMG_FOOTER_LOGO} className="footer-logo"></img>
            <p>
              Everyone was no nice, the plance was clean and we were on time! I
              will definitely fly again with flair!
            </p>
            <h3>Follow Us</h3>

            <div className="contact">
              {CONTACTS.map((item, index) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a link={item.url} target="_blank" key={index}>
                  <img src={item.img} alt=''></img>
                </a>
              ))}
            </div>
          </div>

          <div className="company div-1">
            <h1>{COMPANIES.label}</h1>
            <div className="childs">
              {COMPANIES.childs.map((item, index) => (
                <Link to={item.url} key={index}>
                  {" "}
                  {item.label}{" "}
                </Link>
              ))}
            </div>
          </div>

          <div className="company div-2">
            <h1>{DESTINATIONS.label}</h1>
            <div className="childs">
              {DESTINATIONS.childs.map((item, index) => (
                <Link to={item.url} key={index}>
                  {" "}
                  {item.label}{" "}
                </Link>
              ))}
            </div>
          </div>

          <div className="company div-3">
            <h1>{TRANDING_ROUTES.label}</h1>
            <div className="childs">
              {TRANDING_ROUTES.childs.map((item, index) => (
                <Link to={item.url} key={index}>
                  {" "}
                  {item.label}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-footer">
          <h1>© 2022 Flair Airlines Ltd.</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
