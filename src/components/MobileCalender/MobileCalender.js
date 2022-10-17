import * as React from 'react';
import styled from 'styled-components';
import { LicenseInfo } from '@mui/x-license-pro';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';

export default function MobileCalender() {
    LicenseInfo.setLicenseKey('YOUR_LICENSE_KEY');
    const [value, setValue] = React.useState([null, null]);

    return (
        <Wrapper>
            <Stack spacing={3}>
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={{ start: 'from', end: 'to' }}
                >
                    <MobileDateRangePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            </Stack>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: white;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 4px #0000000d;
`