import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';
import ReverMap from '../../components/ReverMap/ReverMap';
import PromoCode from '../../components/PromoCode/PromoCode';
import TicketInfo1 from '../../components/TicketInfo1/TicketInfo1';

// Styled components
import { Wrapper } from './Rever1-css';

// JSONS
import { HEADER } from '../../constant/HEADER';
import { TICKETINFO } from '../../constant/TICKETINFO';

// Images
import IMG_NOTE from '../../assets/note.png';

const Reser1 = () => {
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
                </div>
            </div>
        </Wrapper>
    )
}

export default Reser1;