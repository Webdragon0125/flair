import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Box, TextField} from '@mui/material/';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';
import ReverMap from "../../components/ReverMap/ReverMap";
import PromoCode from '../../components/PromoCode/PromoCode';
import Footer from "../../components/Footer/Footer";

// Styled components
import { Wrapper } from "./Reser5-css";

import { HEADER } from "../../constant/HEADER";
import { TICKETINFO } from '../../constant/TICKETINFO';
import TicketInfo1 from "../../components/TicketInfo1/TicketInfo1";


// Images
import IMG_PERSONALITEM from '../../assets/personal-items/personalItem.png';
import IMG_BAG from '../../assets/personal-items/bag.png';
import IMG_TRAVEL from '../../assets/personal-items/travel.png';
import IMG_PRIORITY from '../../assets/personal-items/priority.png';

import IMG_APPLE from '../../assets/apple.png';
import IMG_GOOGLE from '../../assets/google.png';

const Reser5 = () => {
    const [value, setValue] = React.useState(dayjs('2022-10-07'));

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
            <ReverMap props={{current: 5}}></ReverMap>
            <div className='select-flight-div'>
                <div>
                    <p className='label-flight-div'>review booking</p>
                    <div className='select-flight'>
                        <Link to='#' className='to-email'>customeremail@gmail.com 780-555-1212</Link>
                        <div className='price'>
                            <p>$340.00 Total</p>
                            <Link to='#'>see price breakdown</Link>
                        </div>
                        <PromoCode></PromoCode>
                    </div>
                </div>
            </div>
            <div className='ticket-infos'>
                <div>
                    <div className='ticket-infos-div'>
                        {
                            TICKETINFO.map((item, index) => (
                                <div className='ticket-item' style={{border: ''}}>
                                    <TicketInfo1 props={{...item, isOpen: false}} key={index}></TicketInfo1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="personalisation">
                <p className="label">
                    personalisation summary
                </p>
                <div className="personalisation-container">
                    <div className="personalisation-tab">
                        <div>
                            <p>Raoul</p>
                        </div>
                    </div>
                    <div className="personalisation-info">
                        <div>
                            <p>Name</p>
                            <p>Raoul Bhatt</p>
                        </div>
                        <div>
                            <p>Date of Birth</p>
                            <p>1980-01-15</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p>me@raoul.ca</p>
                        </div>
                        <div>
                            <p>Phone number</p>
                            <p>7804983779</p>
                        </div>
                    </div>
                    <div className="bags-road">
                        <div className="bags-road-index">
                            <div className="bags-road-index-head">
                                <p>Depart</p>
                            </div>
                            <div className="bags-road-index-body">
                                <div>
                                    <img src={IMG_PERSONALITEM}></img>
                                    <p>1 Personal item</p>
                                </div>
                                <div>
                                    <img src={IMG_BAG}></img>
                                    <p>1 Carry-on bag</p>
                                </div>
                            </div>
                        </div>
                        <div className="bags-road-index">
                            <div className="bags-road-index-head">
                                <p>YEG <span>Edmonton</span></p>
                                <p>
                                    Sept 26(Mon)-18:30 PM
                                </p>
                            </div>
                            <div className="bags-road-index-body">
                                <div>
                                    <img src={IMG_BAG}></img>
                                    <p>1 Checked-bag</p>
                                </div>
                                <div>
                                    <img src={IMG_TRAVEL}></img>
                                    <p>Travel-flex</p>
                                </div>
                            </div>
                        </div>
                        <div className="bags-road-index">
                            <div className="bags-road-index-head">
                                <p>YVR<span>vancouver</span></p>
                                <p>Sept 26(Mon)-18:55 PM</p>
                            </div>
                            <div className="bags-road-index-body">
                                <div>
                                    <img src={IMG_PRIORITY}></img>
                                    <p>Priority boarding</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bags-road">
                        <div className="bags-road-index">
                            <div className="bags-road-index-head">
                                <p>Return</p>
                            </div>
                            <div className="bags-road-index-body">
                                <div>
                                    <img src={IMG_PERSONALITEM}></img>
                                    <p>1 Personal item</p>
                                </div>
                                <div>
                                    <img src={IMG_BAG}></img>
                                    <p>1 Carry-on bag</p>
                                </div>
                            </div>
                        </div>
                        <div className="bags-road-index">
                            <div className="bags-road-index-head">
                                <p>YVR <span>vancouver</span></p>
                                <p>
                                    Sept 26(Mon)-18:30 PM
                                </p>
                            </div>
                            <div className="bags-road-index-body">
                                <div>
                                    <img src={IMG_BAG}></img>
                                    <p>1 Checked-bag</p>
                                </div>
                                <div>
                                    <img src={IMG_TRAVEL}></img>
                                    <p>Travel-flex</p>
                                </div>
                            </div>
                        </div>
                        <div className="bags-road-index">
                            <div className="bags-road-index-head">
                                <p>YEG<span>edmonton</span></p>
                                <p>Sept 26(Mon)-18:55 PM</p>
                            </div>
                            <div className="bags-road-index-body">
                                <div>
                                    <img src={IMG_PRIORITY}></img>
                                    <p>Priority boarding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="payment-billing-div">
                
                <div className="payment-div">
                    <p className="label">Payment</p>
                    <div className="payment-body">
                        <p className="label" style={{fontSize: '20px'}}>Prices in CAD</p>
                        <div className='price-list'>
                            <p className='kind-of-money'>Prices in CAD</p>
                            <div className='prices-list'>
                                <div className='price'>
                                    <span>Fare</span>
                                    <span>$19.08</span>
                                </div>
                                <div className='price'>
                                    <span>Add-ons</span>
                                    <span>$138.60</span>
                                </div>
                                <div className='price'>
                                    <span>Taxes, fees and changes</span>
                                    <span>$85.86</span>
                                </div>
                            </div>
                            <div className='total-price'>
                                <span>$243.54</span>
                            </div>
                            <div className='invoice-total'>
                                <div>
                                    <p>Invoice total</p>
                                    <span>This is the amount that will be charge to your card</span>
                                </div>
                                <div>
                                    <p>$243.54</p> 
                                    <span>non-unfundable</span>
                                </div>
                            </div>
                            <p className='label-promo-code'>
                                have a voucher, gift card or promo code?
                            </p>
                            <TextField id="outlined-basic" label="enter code" variant="outlined" size='small' sx={{
                                width: '100%'
                            }} />
                        </div>
                    </div>
                    <div className="pay-div">
                        <h1>pay with Apple Pay / Google Pay</h1>
                        <div>
                            <button>
                                <img src={IMG_APPLE}></img>Pay
                            </button>
                            <button>
                                <img src={IMG_GOOGLE}></img>Pay
                            </button>
                        </div>
                    </div>
                </div>

                <div className="billing-div">
                    <p className="label">billing info</p>
                    <div className="billing-body">
                        <TextField id="outlined-basic" label="Name of card" variant="outlined" sx={{
                            width: '100%'
                        }} />
                        <TextField id="outlined-basic" label="Card number" variant="outlined" sx={{
                            width: '100%'
                        }} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DatePicker
                                views={['year', 'month']}
                                label="Year and Month"
                                minDate={dayjs('2012-03-01')}
                                maxDate={dayjs('2023-06-01')}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <TextField id="outlined-basic" label="Security code" variant="outlined" sx={{
                            width: '100%'
                        }} />
                        <TextField id="outlined-basic" label="Billing detail" variant="outlined" sx={{
                            width: '100%'
                        }} />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <TextField id="outlined-basic" label="City" variant="outlined" sx={{
                                width: '49%'
                            }} />
                            <TextField id="outlined-basic" label="Postel code" variant="outlined" sx={{
                                width: '49%'
                            }} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{ width: '49%' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Country"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ width: '49%' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Provonce</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Provonce"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="desc">
                            <p>
                                <span>transportation of hazardous materials</span> federal low the carriage of hazardous materials such as aerosols, fireworks, lithiumm batteries, and flammable liquids aboard the aircraft in your checked or carry-oon baggage.<a href='#'>view more hazardous materials. </a>
                            </p>
                        </div>
                        <div className="condi">
                            <div className="checkbox">
                                <input type={'checkbox'}></input>
                                <p>I have read and accept the terms and conditions below:</p>
                            </div>
                            <div>
                                <p>
                                    restrictions.baggage,changes and cancellation fee may apply. <a href="#"> general fare terms and conditions optional fees and changes </a>
                                </p>
                            </div>
                        </div>
                        <button>
                            submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Reser5;