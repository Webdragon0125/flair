import React, { useContext, useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";

import AppContext from "../context/context";

import "react-datepicker/dist/react-datepicker.css";

// Components
import Inform from "../components/Inform/Inform";
import Header from "../components/Header/Header";
import CustomSelectSearch from "../components/SelectSearch/SelectSearch";
import City from "../components/City/City";
import Service from "../components/Services/Services";
import Feedback from "../components/Feedbacks/Feedbacks";
import Footer from "../components/Footer/Footer";

// Styled-components
import { Wrapper, CustomDatePicker, WhereWeFly } from "./Landing-css";

// Images
import IMG_BOTH_DIR from "../assets/both-dir.png";
import IMG_BOTH_DIR_WHITE from "../assets/both-dir-white.png";
import IMG_SELECT_ARROW from "../assets/select-arrow.png";
import IMG_RIGHT_DIR from "../assets/right.png";
import IMG_BACK1 from "../assets/back1.png";
import IMG_STREAM from "../assets/stream.png";
import IMG_GET_READY_FLY from "../assets/get-ready-fly.png";
import IMG_MAP from "../assets/map.png";
import IMG_BACK from "../assets/back.jpg";

// JSONS
import { HEADER } from "../constant/HEADER";
import { BEST_DEAL } from "../constant/BEST_DEAL";
import { SERVICES } from "../constant/SERVICES";
import { CUSTOMERS } from "../constant/CUSTOMERS";

// Images

const Landing = () => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const AppContextProps = useContext(AppContext);

  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { name: "New York", value: "ne" },
    { name: "BeiJing", value: "be" },
    { name: "London", value: "lo" },
  ];

  const wrapperClicked = (e) => {
    let tmp = e.target;
  };

  return (
    <Wrapper onClick={wrapperClicked} bgImg={IMG_BACK}>
      <div className="landing-first">
        <Inform />
        <Header props={HEADER} />
        <div
          className="search-for"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1>Search for low prices on airfare and more</h1>
        </div>
        <div className="seperator" />
      </div>
      {/* <div className="search-search-div">
        <div className="main-container">
          <div className="tickets-div">
            <div className="tickets">
              <img src={IMG_BOTH_DIR}></img>
              <Select style={{ minWidth: 150 }} defaultValue={1}>
                <Option value={1}>round trip</Option>
                <Option value={2}>one-way flight</Option>
              </Select>
            </div>
          </div>

          <div className="search-div">
            <div className="region-search">
              <CustomSelectSearch props={{ flg: 1 }}></CustomSelectSearch>
              <CustomSelectSearch props={{ flg: 2 }}></CustomSelectSearch>
              <div className="search-swap">
                <img src={IMG_BOTH_DIR_WHITE}></img>
              </div>
            </div>
            <div className="data-search">
              <RangePicker />
            </div>
          </div>

          <div className="search-parent-div">
            <button>
              Search
              <img src={IMG_RIGHT_DIR}></img>
            </button>
          </div>
        </div>
      </div> */}

      <div
        className="sun-of-beach"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <p className="title">Explore more deals</p>
        <img src={IMG_BACK1}></img>
      </div>

      <div className="best-deals">
        <p className="title">Enjoy our best deals from</p>

        <div className="items">
          {BEST_DEAL.map((item, index) => (
            <City
              props={{
                ...item,
                name: "Toronto to " + item.name,
              }}
              key={index}
            ></City>
          ))}
        </div>
      </div>

      <div className="get-ready-fly">
        <div
          className="get-ready-fly-content"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1>Get ready to fly!</h1>
          <h2>Here's some info on our jobs they are brand new!</h2>
          <button>View all</button>
        </div>
      </div>

      <div className="services">
        <p className="title">Services</p>
        <div className="items" data-aos="zoom-out">
          {SERVICES.map((item, index) => (
            <Service
              key={index}
              props={{
                img: item.img,
                content: item.content,
                title: item.title,
              }}
            />
          ))}
        </div>
      </div>
      <WhereWeFly img={IMG_MAP}>
        <div
          className="content"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h1>Where we fly</h1>
          <p>
            We are growing fast. With several exciting routes Flair files to
            popular destinations
          </p>
          <button> See map </button>
        </div>
      </WhereWeFly>

      <div className="feedbacks">
        <p className="title">See what out customers are saying</p>
        <Feedback props={CUSTOMERS}></Feedback>
      </div>

      <Footer></Footer>
    </Wrapper>
  );
};

export default Landing;
