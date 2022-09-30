import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import DatePicker from "react-datepicker";

import AppContext from "../context/context";

import "react-datepicker/dist/react-datepicker.css";


// Components
import Inform from "../components/Inform/Inform";
import Header from "../components/Header/Header";
import SelectSearch from "../components/SelectSearch/SelectSearch";
import City from "../components/City/City";

// Images
import IMG_BOTH_DIR from '../assets/both-dir.png';
import IMG_BOTH_DIR_WHITE from '../assets/both-dir-white.png';
import IMG_SELECT_ARROW from '../assets/select-arrow.png';
import IMG_RIGHT_DIR from '../assets/right.png';
import IMG_BACK1 from '../assets/back1.png';
import IMG_STREAM from '../assets/stream.png';
import IMG_GET_READY_FLY from '../assets/get-ready-fly.png';

// JSONS
import { HEADER } from "../constant/HEADER";
import { BEST_DEAL } from "../constant/BEST_DEAL";

import 'react-select-search/style.css'

const Landing = () => {
    const AppContextProps = useContext(AppContext);

    const [startDate, setStartDate] = useState(new Date());

    const options = [
        {name: 'New York', value: 'ne'},
        {name: 'BeiJing', value: 'be'},
        {name: 'London', value: 'lo'},
    ];
    

    return (
        <Wrapper>
            <div className="landing-first">
                <Inform />
                <Header props={HEADER}/>

                <div className="search-for">
                    <h1>
                        Search for low prices on airfare and more
                    </h1>
                </div>
                <div className="tickets-div">
                    <div className="tickets">
                        <img src={IMG_BOTH_DIR}></img>
                        <select>
                            <option>
                                round trip
                            </option>
                            <option>
                                one-way flight
                            </option>
                        </select>
                    </div>
                </div>

                <div className="search-div">
                    <div className="region-search">
                        <SelectSearch></SelectSearch>
                        <SelectSearch></SelectSearch>
                        <div className="search-swap">
                            <img src={IMG_BOTH_DIR_WHITE}></img>
                        </div>
                    </div>
                    <div className="data-search">
                        <CustomDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                        <CustomDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>

                <div className="search-parent-div">
                    <button>
                        Search
                        <img src={IMG_RIGHT_DIR}></img>
                    </button>
                </div>
            </div>

            <div className="sun-of-beach">
                <p>
                    Explore more deals
                </p>
                <img src={IMG_BACK1}></img>
            </div>

            <div className="best-deals">

                <p>Enjoy our best deals from</p>

                <div className='items'>
                    {
                        BEST_DEAL.map((item, index) => (
                            <City props={{
                                ...item,
                                name: "Toronto to " + item.name
                            }} key={index}></City>
                        ))
                    }
                </div>
            </div>

            <div className="get-ready-fly">
                <div className="get-ready-fly-content">
                    <h1>Get ready to fly!</h1>
                    <h2>Here's some info on our jobs they are brand new!</h2>
                    <button>View all</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    /* animation-name: backgroundColorPalette;
	animation-duration: 10s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: ease-in-out; 

    @keyframes backgroundColorPalette {
        0% {
            background: #ee6055;
        }
        25% {
            background: #60d394;
        }
        50% {
            background: #aaf683;
        }
        75% {
            background: #ffd97d;
        }
        100% {
            background: #ff9b85;
        }
    } */

    .landing-first {
        height: 100vh;
        .search-for {
            font-weight: 900;
        }
        .search-for {
            padding: 50px 50px 30px 50px;
            h1 {
                font-size: 50px;
                font-weight: 900;
            }
            ${p => {
                return css`
                    @media screen and (max-width: ${p => p.theme.media1}) {
                        text-align: center;
                    }
                `
            }}
        }
        .tickets-div {
            padding: 20px 50px 20px 50px;
            .tickets {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 10%;
                img {
                    height: 20px;
                }
                padding: 0 50px;
                select {
                    font-size: 15px;
                    font-weight: 900;
                    border: 0;
                    outline: 0;
                }
            }
        }
    
        .search-div {
            padding: 30px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .region-search {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                position: relative;
                .search-swap {
                    position: absolute;
                    left: calc(50% - 20px);
                    img {
                        height: 20px;
                        background-color: black;
                        padding: 10px;
                        border-radius: 50px;
                    }
                    @media screen and (max-width: 950px) {
                        flex-direction: column;
                        top: calc(50% - 20px);
                    }
                }
    
                @media screen and (max-width: 950px) {
                    flex-direction: column;
                }
            }
    
            @media screen and (max-width: ${p => p.theme.media1}) {
                flex-direction: column;
                gap: 20px
            }
        }
    
        .data-search {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
    
        .search-parent-div {
            padding: 10px 50px;
            button {
                outline: 0;
                border: 0;
                color: ${p => p.theme.fontColor1};
                background-color: ${p => p.theme.themeColor1};
    
                display: flex;
                justify-content: center;
                align-items: center;
    
                position: relative;
                padding: 20px 100px;
                font-size: 20px;
                font-weight: 600;
                border-radius: 50px;
    
                img {
                    position: absolute;
                    right: 20px;
                    height: 30px;
                }
            }
        }
    }

    .sun-of-beach {
        text-align: center;
        p {
            font-size: 20px;
            margin: 20px 0;
            font-weight: 900;
        }
        img {
            width: 100%;
        }
    }

    .best-deals {
        padding: 50px;
        .items {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
        }
    }

    .get-ready-fly {
        width: calc(100% - 100px);
        min-height: 500px;
        margin: 50px;
        background-image: url(${IMG_STREAM}), url(${IMG_GET_READY_FLY});
        background-size: cover;
        background-repeat: no-repeat;
        padding: 100px 50px;
        @media screen and (max-width: 550px){
            padding: 100px 10px;
        }
        .get-ready-fly-content {
            color: ${p => p.theme.fontColor1};
            width: 400px;
            @media screen and (max-width: 550px){
                text-align: center;
                width: 100%;
            }
            h1 {
                font-size: 40px;
                margin: 20px 0;

                @media screen and (max-width: 550px){

                }
            }
            h2 {
                font-size: 30px;
                margin: 20px 0;
            }

            button {
                border: 0;
                outline: 0;
                background-color: ${p => p.theme.themeColor1};
                padding: 10px 30px;
                font-size: 20px;
                color: ${p => p.theme.fontColor1};
                border-radius: 20px;
            }
        }

        
    }
`

const CustomDatePicker = styled(DatePicker)`
    padding: 10px;
    font-size: 30px;
    border-radius: 10px;
    width: 200px;
    border: 1px solid ${p => p.theme.borderColor1};
    outline: none;
    @media screen and (max-width: ${p => p.theme.media1}) {
        width: 100%;
    }
    @media screen and (max-width: 400px) {
        font-size: 15px;
    }
`

export default Landing;