import React, {useState} from "react";
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
import Header from '../../components/Header/Header';
import Inform from '../../components/Inform/Inform';
import ReverMap from '../../components/ReverMap/ReverMap';

// JSONS
import { HEADER } from "../../constant/HEADER";

import { Wrapper } from "./JoinFlair-css";
import Footer from "../../components/Footer/Footer";

const JoinFlair = () => {
    const [value, setValue] = React.useState(dayjs('2022-10-07'));

    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
            <ReverMap props={{current: 1}}></ReverMap>
            <div className="join-container">
                <p className="label">complete your registration</p>
                <div className="join-form">
                    <p className="big-label">join the flair family</p>
                    <div className="join-form-body">
                        <TextField id="outlined-basic" label="title" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <TextField id="outlined-basic" label="First name" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <TextField id="outlined-basic" label="Last name" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                views={['year', 'month']}
                                label="date of birth"
                                minDate={dayjs('2012-03-01')}
                                maxDate={dayjs('2023-06-01')}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} sx={{
                                    width: '300px',
                                }}/>}
                            />
                        </LocalizationProvider>
                        <TextField id="outlined-basic" label="Mobile number" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <TextField type='password' id="outlined-basic" label="password" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <TextField type='password' id="outlined-basic" label="password again" variant="outlined" sx={{
                            width: '300px'
                        }} />
                        <div className="sms">
                            <input type='checkbox'></input>
                            <p>Yes, I want to receive email from Flair and sms reminders on flight departures or changes.</p>
                        </div>
                    </div>
                </div>
                <div className="register-button">
                    <button>
                        register
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </Wrapper>
    )
}

export default JoinFlair;