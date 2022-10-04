import React, { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';

import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

import AppContext from "../../context/context";

// Components
import Inform from "../../components/Inform/Inform";
import Header from "../../components/Header/Header";
import City from "../../components/City/City";
import Service from "../../components/Services/Services";
import Feedback from "../../components/Feedbacks/Feedbacks";
import Footer from "../../components/Footer/Footer";
import SelPassenger from "../../components/SelPassenger/SelPassenger";

// Styled-components
import { Wrapper, WhereWeFly } from "./Landing-css";

// Images
import IMG_BACK1 from "../../assets/back1.png";
import IMG_MAP from "../../assets/map.png";
import IMG_BACK from "../../assets/back.jpg";
import IMG_BOTH_DIR_WHITE from '../../assets/both-dir-white.png';
import IMG_BOTH_DIR from '../../assets/both-dir.png';
import IMG_RIGHT from '../../assets/right.png';

// JSONS
import { HEADER } from "../../constant/HEADER";
import { BEST_DEAL } from "../../constant/BEST_DEAL";
import { SERVICES } from "../../constant/SERVICES";
import { CUSTOMERS } from "../../constant/CUSTOMERS";


// Images

const Landing = () => {

  const AppContextProps = useContext(AppContext);

  const [startDate, setStartDate] = useState(new Date());

  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  useEffect(() => {

  }, [])

  const options = [
    { label: 'Toronto', year: 1994 },
    { label: 'New York', year: 1972 },
    { label: 'Edmonton', year: 1974 },
    { label: 'BeiJing', year: 2008 },
    { label: 'Tokyo', year: 1957 },
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
          <h1 class="ml6">
            Search for low prices from an airfare and more
          </h1>
        </div>
        <div className="trip-kind-and-person">
          <div className="trip-kind">
            <img src={IMG_BOTH_DIR} alt=''></img>
            <select>
              <option>round trip</option>
              <option>one-way flight</option>
            </select>
          </div>
          <SelPassenger></SelPassenger>
          <div className="person"></div>
        </div>
        <div className="search-input-div">
          <div className="search-position">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Edminton" sx={{
              }} />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Where to?" />}
            />
            <img src={IMG_BOTH_DIR_WHITE} alt=''></img>
          </div>
          <div className="search-date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="From"
                  value={value}
                  minDate={dayjs('2017-01-01')}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} 
                    
                  />}
                />
              </Stack>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="To"
                  value={value}
                  minDate={dayjs('2017-01-01')}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} sx={{
                    
                  }} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>
        <div className="search-button-contain-div">
          <button>search <img src={IMG_RIGHT} alt='' /></button>
          <div className="choose-what">
            <div className="choose-what-title">
              Trending searches
            </div>
            <div className="choose-wait-childs">
              <div>
                edmonton to vancouver
              </div>
              <div>
                edmonton to vancouver
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sun-of-beach">
        <p className="title">Explore more deals</p>
        <Link to='/book'><img src={IMG_BACK1} alt=''></img></Link>
      </div>

      <div className="best-deals">
        <div>
          <p className="title">Enjoy our best deals from</p>
          <select>
            <option> Toronto </option>
            <option> Edminton </option>
          </select>
        </div>
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
