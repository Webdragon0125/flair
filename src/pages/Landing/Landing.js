import React, { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import AppContext from "../../context/context";

// Components
import Inform from "../../components/Inform/Inform";
import Header from "../../components/Header/Header";
import City from "../../components/City/City";
import Service from "../../components/Services/Services";
import Feedback from "../../components/Feedbacks/Feedbacks";
import Footer from "../../components/Footer/Footer";

// Styled-components
import { Wrapper, WhereWeFly } from "./Landing-css";

// Images
import IMG_BACK1 from "../../assets/back1.png";
import IMG_MAP from "../../assets/map.png";
import IMG_BACK from "../../assets/back.jpg";
import IMG_BOTH_DIR from '../../assets/both-dir-white.png';

// JSONS
import { HEADER } from "../../constant/HEADER";
import { BEST_DEAL } from "../../constant/BEST_DEAL";
import { SERVICES } from "../../constant/SERVICES";
import { CUSTOMERS } from "../../constant/CUSTOMERS";

// Images

const Landing = () => {
  const AppContextProps = useContext(AppContext);

  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
  ];

  const wrapperClicked = (e) => {
    let tmp = e.target;
  };

  return (
    <Wrapper onClick={wrapperClicked} bgImg={IMG_BACK}>
      <div className="landing-first">
        <Inform />
        <Header props={HEADER} />
        <div className="search-for">
          <h1>Search for low prices on airfare and more</h1>
        </div>
        <div className="search-input-div">
          <div className="search-position">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <img src={IMG_BOTH_DIR} alt=''></img>
          </div>
        </div>
      </div>

      <div className="sun-of-beach">
        <p className="title">Explore more deals</p>
        <img src={IMG_BACK1} alt=''></img>
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
        <div className="get-ready-fly-content">
          <h1>Get ready to fly!</h1>
          <h2>Here's some info on our jobs they are brand new!</h2>
          <button>View all</button>
        </div>
      </div>

      <div className="services">
        <p className="title">Services</p>
        <div className="items">
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
        <div className="content">
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
