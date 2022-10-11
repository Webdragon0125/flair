import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from '../../components/Header/Header';
import Inform from '../../components/Inform/Inform';
import ReverMap from '../../components/ReverMap/ReverMap';
import PromoCode from '../../components/PromoCode/PromoCode';
import { Priority } from '../Reser2/Reser2-css';
import Footer from '../../components/Footer/Footer';
import Announ from '../../components/Announ/Announ';

// Styled components
import { Wrapper } from './Travelflex-css';

// JSONS
import { HEADER } from '../../constant/HEADER';

// Images
import IMG_CHECKED from '../../assets/checked.png';
import IMG_FLIGHT from '../../assets/flight.png';
import IMG_TRAVEL from '../../assets/travelflex.png';
import IMG_CHECKED_WHITE from '../../assets/checked-white.png';
import IMG_NOTE from '../../assets/note.png';

const Travelflex = () => {

    const checked_list = [
        'Unlimited-flight-changes',
        'No change fees',
        'More flexibility',
        'No waiting in line, change your trip yourself through our self-serve option'
    ]

    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
            <ReverMap props={{current: 2}}></ReverMap>
            <div className='select-flight-div'> 
                <p className='label-flight-div'>add travelflex<span>TM</span></p>
                <div className='select-flight'>
                    <Link to='#' className='to-email'>Enter your email address or phone number to save flight {'>'}</Link>
                    <div className='price'>
                        <p>$340.00 Total</p>
                        <Link to='#'>see price breakdown</Link>
                    </div>
                    <PromoCode></PromoCode>
                </div>
            </div>
            <div className='travelflex-div'>
                <div className='travelflex-div-header'>
                    <div className='perks'>
                        <div>
                            <p>Travelflex<span>TM</span></p>
                            <p>perks</p>
                        </div>
                        <p className='p-peace'>Peace of mind guaranteed</p>
                    </div>
                    <button className='buttons'>next flight</button>
                </div>

                <div className='checked-list'>
                    {
                        checked_list.map((item, index) => (
                            <div key={index}>
                                <img src={IMG_CHECKED}></img>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </div>

                <p className='p1'>select your travelflex option (required)</p>

                <div className='travelflex-choose-div'>
                    <div className='header'>
                        <p>Depart</p>
                        <div>
                            <p>YVR</p>
                            <span>cancouver</span>
                        </div>
                        <img src={IMG_FLIGHT}></img>
                        <div>
                            <p>YVR</p>
                            <span>cancouver</span>
                        </div>
                    </div>
                    <div className='travelflex-choose'>
                        <Priority props={{recommend: true, checked: true }}>
                            <div className='priority-map'>
                                <img src={IMG_TRAVEL} style={{width: '150px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                add travelflex
                            </p>
                            <p className='money'>
                                $10.50 per passenger each way
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority props={{recommend: false, checked: false }}>
                            <p className='priority-desc' style={{marginTop: '50px'}}>
                                no travelflex
                            </p>
                            <p className='money'>
                                I won't change my flight
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                </div>

                <div className='travelflex-choose-div'>
                    <div className='header'>
                        <p>Return</p>
                        <div>
                            <p>YVR</p>
                            <span>toronto</span>
                        </div>
                        <img src={IMG_FLIGHT}></img>
                        <div>
                            <p>YVR</p>
                            <span>vancouver</span>
                        </div>
                    </div>
                    <div className='travelflex-choose'>
                        <Priority props={{recommend: true, checked: true }}>
                            <div className='priority-map'>
                                <img src={IMG_TRAVEL} style={{width: '150px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                add travelflex
                            </p>
                            <p className='money'>
                                $10.50 per passenger each way
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority props={{recommend: false, checked: false }}>
                            <p className='priority-desc' style={{marginTop: '50px'}}>
                                no travelflex
                            </p>
                            <p className='money'>
                                I won't change my flight
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                </div>

                <p className='big-letter'>don't wait</p>
                <p className='themecolored-letter'>travelflex is only availiable at the time of booking</p>
                <div className='noted'>
                    <img src={IMG_NOTE}></img>
                    <span> only availiable at the time of booking </span>
                </div>
                <p className='normal'>
                    With travelflex, you can make changes to your trip once without paying changes fees (each way per passenger), you would be however responsible for any difference in fares.
                </p>
                <p className='normal'>
                    Eligible changes using travelflex include: <span>date of travel, time of travel, destination or departure change up to 3 hours before departure (fare cost differences may apply)</span>
                </p>
            </div>
            <div className='passenger-buttons'>
                <Link className='info'>passenger info</Link>
                <Link to='/travelflex' className='continue'>continue</Link>
            </div>
            <Announ></Announ>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Travelflex;