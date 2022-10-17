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
import MobileFormDiv from "../../components/MobileFormDiv/MobileFormDiv";
import MobileLocationSearch from '../../components/MobileLocationSearch/MobileLocationSearch';
import MobileCalender from "../../components/MobileCalender/MobileCalender";

// Styled-components
import { Wrapper, WhereWeFly, SearchMobileDiv } from "./Landing-css";

// Images
import IMG_BACK1 from "../../assets/back1.png";
import IMG_MAP from "../../assets/map.png";
import IMG_BACK from "../../assets/back.jpg";
import IMG_BOTH_DIR_WHITE from '../../assets/both-dir-white.png';
import IMG_BOTH_DIR from '../../assets/both-dir.png';
import IMG_RIGHT from '../../assets/right.png';
import IMG_WHITE_LEFT from '../../assets/left-white.png';

// JSONS
import { HEADER } from "../../constant/HEADER";
import { BEST_DEAL } from "../../constant/BEST_DEAL";
import { SERVICES } from "../../constant/SERVICES";
import { CUSTOMERS } from "../../constant/CUSTOMERS";



const Landing = () => {

  const AppContextProps = useContext(AppContext);

  const [startDate, setStartDate] = useState(new Date());

  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  const [mobileSearchFlag, setMobileSearchFlag] = useState(false);
  const [mobileTypeFlag, setMobileTypeFlag] = useState(true);

  const [displayFlag1, setDisplayFlag1] = useState(false);
  const [displayFlag2, setDisplayFlag2] = useState(false);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 200 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, [])

  const options = [
    { index: 0, label: 'Toronto', country: 'Canada', year: 1994 },
    { index: 1, label: 'New York', country: 'United states', year: 1972 },
    { index: 2, label: 'Edmonton', country: 'Canada', year: 1974 },
    { index: 3, label: 'BeiJing', country: 'Chian', year: 2008 },
    { index: 4, label: 'Tokyo', country: 'Japan', year: 1957 },
  ];

  const wrapperClicked = (e) => {
    let tmp = e.target;
  };

  useEffect(() => {
    mobileSearchFlag
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [mobileSearchFlag]);

  return (
    <Wrapper onClick={wrapperClicked} bgImg={IMG_BACK}>
      <div className="landing-first">
        <Inform />
        <Header props={HEADER} />
        <div className="search-for">
          <div>
            <h1 class="ml6">
              <span className="letter">s</span>
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
        <div className="search-button-mobile">
          <button onClick={() => {
            setMobileSearchFlag(true);
          }}>start search</button>
        </div>
        <SearchMobileDiv flag={mobileSearchFlag} mobileTypeFlag={mobileTypeFlag}>
          <div className="header-theme">
            <img src={IMG_WHITE_LEFT} onClick={() => setMobileSearchFlag(false)}></img>
            <p>go back</p>
          </div>
          <div className="ticket-type">
            <div className='return' onClick={() => setMobileTypeFlag(true)}>
              <div>
                <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg"><path d="m47.6432898 8.00954791c.0084993.86908689-2.2831895 1.58364571-3.1618372 1.57681205-.0635767-.00322721-.1271534-.00645447-.2157311-.02353997l-1.5372676-.11580131-2.8928681 5.63160162c-.097171.2342624-.153618.3950568-.3829238.3960062l-.7900699.0102519c-.5221885-.0013286-.4678898-.099286-.4071461-.3857543l1.1140896-5.0168989-.022074-.8445976-.7879216-.05258509c-.955799.01442848-2.1323107-.2215417-3.0795164-.45846121l-1.3288541 1.9845869c-.2150463.3289926-.153618.3950568-.3829238.3960062-.5221884-.0013286-.4314623-.04708-.4071461-.3857543l.3609439-2.36103868c-.0092781-.10118467.0200196-.21300036.0857446-.27261013-.0114263-.03834764-.0614283-.0660642-.0478536-.09055356-.0114265-.03834768.040724-.07346805.106449-.13307782-.1000041-.05543318-.1342832-.17047614-.1435612-.27166076l-.429126-2.35078678c-.0392605-.34190159-.1142636-.38347649.3829238-.39600622.2293058-.00094937.1885818.07251868.4071461.38575433l1.4206676 2.0360316c.9258166-.25514544 2.0787908-.44840319 3.0210151-.43834232l.7786436-.04859952-.0220739-.84459754-1.2675464-5.02449085c-.0664099-.29292289-.1392647-.39733477.3829238-.39600622l.7900699-.01025189c.2293058-.00094938.2750112.15244121.3935714.41024368l3.0940847 5.62077663 1.5322861-.11105733c.0885778.01708554.1657291-.00417659.2293059-.00094933.8786476.0068336 3.1980766.71626363 3.2065758 1.58535052zm-47.29125569 15.48295869c.02183662-.8688541 2.33706713-1.5029988 3.21494107-1.465505.06342532.0054441.12685073.0108882.21477826.0310546l1.53228962.1693806 3.08764587-5.5272113c.10528747-.2307285.16731174-.389455.39651107-.3824011l.7899464.0173274c.5218239.0195518.4641396.1155545.39343544.3997285l-1.2884982 4.9749616-.00741557.8448534.78560643.0800511c.9557203.0189372 2.12328.2958233 3.0616404.5656555l1.3973057-1.9370015c.226397-.3212872.1673117-.389455.3965109-.3824012.521824.0195519.4295565.0621092.3934355.3997286l-.4431231 2.3470036c.0057411.1014468-.027441.2121719-.0952064.2694516.0100811.038723.0590854.0681678.0446644.0921685.010081.038723-.0432632.072002-.1110286.1292817.0980086.0588895.1282518.1750587.1339929.2765055l.3468234 2.364331c.0273043.3430634.1008108.3872306-.396511.3824011-.2291993-.0070539-.1859361-.0790559-.3934354-.3997285l-1.3487458-2.0843719c-.9341571.2226794-2.0931735.3755812-3.03447275.3326433l-.77986534.0213957-.00741554.8448534 1.09142213 5.0656668c.05614649.2950621.12531294.401953-.39651098.3824012l-.78994643-.0173275c-.22919928-.0070538-.2695236-.1619461-.37901436-.4237292l-2.89603759-5.7253346-1.53522857.0575137c-.08792744-.0201664-.16577392-.0016098-.22919924-.0070539-.87787394-.0374938-3.17113124-.8274386-3.14929462-1.6962927zm3.64796589-13.4925066c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm4-1.5c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm16 17.5216276c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm-5.4895176-1.5h-2c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h2c.2761423 0 .5.2238576.5.5s-.2238577.5-.5.5zm-5 0h-2c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h2c.2761423 0 .5.2238576.5.5s-.2238577.5-.5.5zm-5 0h-2c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h2c.2761423 0 .5.2238576.5.5s-.2238577.5-.5.5zm-5 0h-2c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h2c.2761423 0 .5.2238576.5.5s-.2238577.5-.5.5zm-5 0h-2c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h2c.2761423 0 .5.2238576.5.5s-.2238577.5-.5.5z" fill-rule="evenodd"></path></svg>
              </div>
              <p>return</p>
            </div>
            <div className="oneway" onClick={() => setMobileTypeFlag(false)}>
              <div>
                <svg viewBox="0 0 46 16" xmlns="http://www.w3.org/2000/svg"><path d="m45.6432897 8.00954812c.0084993.86908688-2.2831895 1.5836457-3.1618372 1.57681205-.0635767-.00322722-.1271534-.00645448-.2157311-.02353998l-1.5372676-.11580131-2.8928681 5.63160162c-.097171.2342624-.153618.3950568-.3829238.3960062l-.7900699.0102519c-.5221884-.0013285-.4678898-.099286-.4071461-.3857543l1.1140896-5.0168989-.022074-.84459759-.7879216-.0525851c-.955799.01442848-2.1323106-.2215417-3.0795164-.45846121l-1.328854 1.9845869c-.2150464.3289926-.1536181.3950568-.3829239.3960062-.5221884-.0013286-.4314623-.04708-.407146-.3857543l.3609438-2.36103868c-.009278-.10118467.0200196-.21300036.0857446-.27261013-.0114263-.03834763-.0614283-.0660642-.0478536-.09055355-.0114264-.03834769.040724-.07346806.106449-.13307783-.1000041-.05543318-.1342832-.17047613-.1435612-.27166075l-.429126-2.35078678c-.0392605-.3419016-.1142636-.3834765.3829238-.39600622.2293058-.00094938.1885818.07251867.4071461.38575433l1.4206676 2.03603159c.9258166-.25514543 2.0787908-.44840318 3.0210152-.43834232l.7786435-.04859952-.0220739-.84459754-1.2675464-5.02449084c-.0664099-.29292289-.1392646-.39733478.3829238-.39600622l.7900699-.01025189c.2293058-.00094938.2750112.15244121.3935714.41024368l3.0940847 5.62077663 1.5322861-.11105734c.0885778.01708555.1657291-.00417659.2293059-.00094933.8786476.00683361 3.1980766.71626364 3.2065758 1.58535053zm-43.6432897 1.99045188c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm3.5-2c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5z" fill-rule="evenodd"></path></svg>
              </div>
              <p>one way</p>
            </div>
          </div>
          <div className="search-location-mobile">
            <div onClick={() => setDisplayFlag1(true)}>
              <MobileFormDiv props={{ flag: 0 }} onClick={() => alert('hello')}></MobileFormDiv>
            </div>
            <div onClick={() => setDisplayFlag2(true)}>
              <MobileFormDiv props={{ flag: 1 }}></MobileFormDiv>
            </div>
            <svg className='reserve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" transform="matrix(0 1 1 0 1 1)"><circle cx="15" cy="15" r="15" fill="#FFF" fill-rule="nonzero" stroke="#EDEEEF"></circle><path fill="#2091EB" d="M11.187 8.612l3.85 3.851L16 11.5 10.5 6 5 11.5l.963.963 3.849-3.851V17h1.375zm7.626 12.776l-3.85-3.851L14 18.5l5.5 5.5 5.5-5.5-.963-.963-3.849 3.851V13h-1.375z"></path></g></svg>
          </div>
          <MobileCalender></MobileCalender>
        </SearchMobileDiv>
        <MobileLocationSearch props={{ displayFlag: displayFlag1, setDisplayFlag: setDisplayFlag1, options: options }}></MobileLocationSearch>
        <MobileLocationSearch props={{ displayFlag: displayFlag2, setDisplayFlag: setDisplayFlag2, options: options }}></MobileLocationSearch>
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
