import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Switch from '@mui/material/Switch';


// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';
import ReverMap from '../../components/ReverMap/ReverMap';
import PromoCode from '../../components/PromoCode/PromoCode';
import TicketInfo1 from '../../components/TicketInfo1/TicketInfo1';
import Footer from '../../components/Footer/Footer';

// Styled components
import { Wrapper } from './Rever1-css';

// JSONS
import { HEADER } from '../../constant/HEADER';
import { TICKETINFO } from '../../constant/TICKETINFO';

// Images
import IMG_NOTE from '../../assets/note.png';
import IMG_REM1 from '../../assets/remember1.png';
import IMG_REM2 from '../../assets/remember2.png';

const Reser1 = () => {
    const [age, setAge] = React.useState('');
    
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const dateChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
            <ReverMap></ReverMap>
            <div className='select-flight-div'> 
                <p className='label-flight-div'>selected flight</p>
                <div className='select-flight'>
                    <Link to='#' className='to-email'>Enter your email address or phone number to save flight ></Link>
                    <div className='price'>
                        <p>$340.00 Total</p>
                        <Link to='#'>see price breakdown</Link>
                    </div>
                    <PromoCode></PromoCode>
                </div>
            </div>
            <div className='ticket-infos'>
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
            <div className='passenger-information-div'>
                <h1 className='label'> passenger information </h1>
                <div className='passenger-information'>
                    <p className='passenger-name'> Raoul Bhatt </p>
                    <p className='passenger-note'>
                        <img src={IMG_NOTE} alt=''></img>
                        <span>Note: Please ensure that the name listed matches the government issued photo ID that will be used to travel.</span>
                    </p>
                    <div className='forms'>
                        <Box sx={{ width: '30%' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Title*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Title*"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '30%' }}>
                            <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth/>
                        </Box>
                        <Box sx={{ width: '30%' }}>
                            <TextField id="outlined-basic" label="Last name" variant="outlined" fullWidth/>
                        </Box>
                        <Box sx={{ width: '30%' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    onChange={dateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    sx={{

                                    }}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ width: '30%' }}>
                            <TextField id="outlined-basic" label="Mobile number" variant="outlined" fullWidth/>
                        </Box>
                        <Box sx={{ width: '30%' }}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                        </Box>
                    </div>
                    <div className='receive-email-check'>
                        <input type='checkbox' />
                        <p>
                            Yes, i want to receive emails from Flair and sms reminders on flight departures or changes
                        </p>
                    </div>
                    <div className='access-request'>
                        <Switch {...label} defaultChecked color="secondary" />
                        <p> accessibility request </p>
                    </div>
                </div>
            </div>
            <div className='forget-something'>
                <h1>Did you forget something ?</h1>
                <div className='somethings'>
                    <div className='something'>
                        <div>
                            <img src={IMG_REM1} alt=''></img>
                        </div>
                        <button> Add </button>
                    </div>
                    <div className='something'>
                        <div>
                            <img src={IMG_REM2} alt=''></img>
                        </div>
                        <button> Add </button>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <button> Change flight </button>
                <button> continue </button>
            </div>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Reser1;