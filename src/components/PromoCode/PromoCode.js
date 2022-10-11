import React, {useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//Images
import IMG_PROMOCODE from '../../assets/ps_promo.png';

const PromoCode = () => {
    const [popupFlag, setPopupFlag] = useState(false);
    return (
        <Wrapper popupFlag={popupFlag}>
            <img src={IMG_PROMOCODE} alt='promo' onClick={() => setPopupFlag(!popupFlag)} ></img>
            <span onClick={() => setPopupFlag(!popupFlag)}>apply promo code</span>
            <div className='popup'>
                <TextField id="outlined-basic" label="Enter your Email..." variant="outlined" sx={{background: 'white'}}/>
                <button>apply</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    font-size: 18px;
    img {
        width: 30px;
    }
    .popup {
        position: absolute;
        display: ${p => p.popupFlag ? 'flex' : 'none'};
        bottom: -90px;
        width: 250px;
        right: -50px;
        z-index: 105;
        padding: 10px;
        background-color: white;
        border: 1px solid ${p => p.theme.borderColor1};
        button {
            border: 0;
            outline: 0;
            background-color: ${p => p.theme.themeColor1};
            color: white;
            margin-left: 20px;
            border-radius: 5px;
        }
    }
`
export default PromoCode