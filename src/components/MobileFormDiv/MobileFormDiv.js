import React from 'react';

import {
    Wrapper
} from './MobileFormDiv-css';


const MobileFormDiv = ({ props }) => {
    return (
        <Wrapper flag={props.flag}>
            <div className='flight-svg-container'>
                <svg viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><path d="M17.737 1.076c-1.21-.656-2.586-.308-3.526.1l-2.804 1.217L6.585.136 3.714.251l3.981 3.757-2.537 1.121-2.64-.935-1.768.767 1.597 1.846c-.168.188-.321.451-.182.728.18.362.717.545 1.596.545.18 0 .375-.008.584-.023.965-.071 2.012-.3 2.666-.584l10.022-4.35c.865-.375 1.296-.77 1.318-1.205.01-.226-.087-.556-.614-.842zM.75 11.533h17.602v.662H.75z"></path></svg>
            </div>
            <div className='label-container'>
                <p>{props.country}</p>
                <p>{props.label}</p>
            </div>
        </Wrapper>
    )
}

export default MobileFormDiv;