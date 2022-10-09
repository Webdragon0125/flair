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
                <TextField id="outlined-basic" label="promocode" variant="outlined" sx={{background: 'white'}}/>
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
        display: ${p => p.popupFlag ? 'block' : 'none'};
        bottom: -60px;
        right: 0;
    }
`
export default PromoCode