import React, { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import anime from 'animejs/lib/anime.es';
import { Link } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init();
    AOS.refresh();
    anime.timeline({loop: true})
    .add({
      targets: '.ml6 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
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
            <div>
              <h1 class="ml6">
                <span className="letter">S</span>
                <span className="letter">e</span>
                <span className="letter">a</span>
                <span className="letter">r</span>
                <span className="letter">c</span>
                <span className="letter">h</span>
                <span className="letter"> </span>
                <span className="letter">f</span>
                <span className="letter">o</span>
                <span className="letter">r</span>
                <span className="letter"> </span>
                <span className="letter">l</span>
                <span className="letter">o</span>
                <span className="letter">w</span>
                <span className="letter"> </span>
                <span className="letter">p</span>
                <span className="letter">r</span>
                <span className="letter">i</span>
                <span className="letter">c</span>
                <span className="letter">e</span>
                <span className="letter">s</span>
                <span className="letter"> </span>
                <span className="letter">f</span>
                <span className="letter">r</span>
                <span className="letter">o</span>
                <span className="letter">m</span>
                <span className="letter"> </span>
                <span className="letter">a</span>
                <span className="letter">n</span>
                <span className="letter"> </span>
                <span className="letter">a</span>
                <span className="letter">i</span>
                <span className="letter">r</span>
                <span className="letter">f</span>
                <span className="letter">a</span>
                <span className="letter">r</span>
                <span className="letter">e</span>
                <span className="letter"> </span>
                <span className="letter">a</span>
                <span className="letter">n</span>
                <span className="letter">d</span>
                <span className="letter"> </span>
                <span className="letter">m</span>
                <span className="letter">o</span>
                <span className="letter">r</span>
                <span className="letter">e</span>
              </h1>
            </div>
          </div>
          <div className="trip-kind-and-person">
            <div>
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
          </div>
          <div className="search-input-div">
            <div>
              <div className="search-position">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Edmonton"
                  sx={{
                    backgroundColor: 'white',
                    '& .MuiAutocomplete-inputFocused': {
                      fontSize: '30px',
                      fontFamily: 'avatar-bold',
                      '@media screen and (max-width: 500px)': {
                        fontSize: '20px',
                      }
                    },
                    '& .MuiInputLabel-shrink': {
                      fontSize: '20px !important',
                      fontFamily: 'avatar-bold',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '30px',
                      fontFamily: 'avatar-bold',
                      color: 'black',
                      '@media screen and (max-width: 500px)': {
                        fontSize: '20px',
                      }
                    }
                  }}
                  />}
                />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Where to?"
                  sx={{
                    backgroundColor: 'white',
                    '& .MuiAutocomplete-inputFocused': {
                      fontSize: '30px',
                      fontFamily: 'avatar-bold',
                      '@media screen and (max-width: 500px)': {
                        fontSize: '20px',
                      }
                    },
                    '& .MuiInputLabel-shrink': {
                      fontSize: '20px !important',
                      fontFamily: 'avatar-bold',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '30px',
                      fontFamily: 'avatar-bold',
                      color: 'black',
                      '@media screen and (max-width: 500px)': {
                        fontSize: '20px',
                      }
                    }
                  }}
                  />}
                  
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
                      sx={{
                        backgroundColor: 'white',
                        width: '300px',
                        '& .MuiInputBase-inputAdornedEnd': {
                          fontSize: '30px',
                          fontFamily: 'avatar-bold',
                          '@media screen and (max-width: 500px)': {
                            fontSize: '20px',
                          }
                        }
                      }}
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
                        backgroundColor: 'white',
                        width: '300px',
                        '& .MuiInputBase-inputAdornedEnd': {
                          fontSize: '30px',
                          fontFamily: 'avatar-bold',
                          '@media screen and (max-width: 500px)': {
                            fontSize: '20px',
                          }
                        }
                      }} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
            </div>
            </div>
          <div className="search-button-contain-div">
            <div>
              <div class="wrap">
                <button class="button">{'search'}
                <img src={IMG_RIGHT} alt='' /></button>
              </div>
              <div className="choose-what">
                <div className="choose-what-title">
                  trending searches
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
        <div className="sun-of-beach" id='explore-more-deals'>
          <p className="title"></p>
          <Link to='/book'><img src={IMG_BACK1} alt=''></img></Link>
        </div>
      </div>


      <div className="best-deals">
        <div>
          <p className="title">Enjoy our best deals from</p>
          <select>
            <option> Toronto </option>
            <option> Edmonton </option>
          </select>
        </div>
        <div className="items">
          <div className="items-div">
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
      </div>

      <div className="get-ready-fly" id='get-ready-fly'>
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
        <div className="content" id='where-we-fly'>
          <h1>
            where we fly</h1>
          <p>
            We are growing fast. With several exciting routes Flair files to
            popular destinations
          </p>
          <button> see map </button>
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
