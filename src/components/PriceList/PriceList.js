import React from "react";
import {Box, TextField} from '@mui/material/';
import { Wrapper } from "./PriceList-css";

const PriceList = ({props}) => {
    return (
        <Wrapper displayFlag={props.displayFlag}>
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
        </Wrapper>
    )
}

export default PriceList;

