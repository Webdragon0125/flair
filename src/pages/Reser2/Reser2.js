import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';
import ReverMap from '../../components/ReverMap/ReverMap';
import PromoCode from '../../components/PromoCode/PromoCode';
import PriceList from '../../components/PriceList/PriceList';
import Footer from '../../components/Footer/Footer';

// JSONS
import { HEADER } from '../../constant/HEADER';

// Styled componets
import { Wrapper, Tickets, Priority } from './Reser2-css';

// Imagesh
import IMG_PRI_CHECKED from '../../assets/priority-checked.png';
import IMG_PRI_UNCHECKED from '../../assets/priority-unchecked.png';
import IMG_CHECKED_WHITE from '../../assets/checked-white.png';
import IMG_PREPAY from '../../assets/pre-pay.png';
import IMG_CHECKINONLINE from '../../assets/check-in-online.png';

const Reser2 = () => {

    const [priFlag, setPriFlag] = useState(0);
    const [payFlag, setpayFlag] = useState(0);

    const [priceListDispalyFlag, setPriceListDisplayFlag] = useState(false);

    const func_seeprice = (e) => {
        e.preventDefault();
        setPriceListDisplayFlag(!priceListDispalyFlag);
    }

    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
            <ReverMap props={{current: 2}}></ReverMap>
            <div className='select-flight-div'> 
                <div>
                    <p className='label-flight-div'>personalise your trip</p>
                    <div className='select-flight'>
                        <Link to='#' className='to-email'>Enter your email address or phone number to save flight {'>'}</Link>
                        <div className='price'>
                            <p>$340.00 Total</p>
                            <Link to='#'>see price breakdown</Link>
                            <PriceList props={{displayFlag: priceListDispalyFlag}}></PriceList>
                        </div>
                        <PromoCode></PromoCode>
                    </div>
                </div>
            </div>
            <div className='personalise-div'>
                <div>
                    <div className='tickets'>
                        <Tickets props={{flag: 0}}>
                            <p>Depart <span>YEG {'->'} YLW</span></p>
                            <p>duration 1h 15m</p>
                        </Tickets>
                        <Tickets props={{flag: 1}}>
                            <p>Depart <span>YLW {'->'} YEG</span></p>
                            <p>duration 1h 15m</p>
                        </Tickets>
                    </div>
                    <p className='p1'>don't wait in line. get on the plane first</p>
                    <p className='p2'>Want to get settled onboard first and make sure you encure space for your carry-on-bag? Add priority Boarding to your revervation!</p>
                    <p className='p3'>select your priority boarding option (required)</p>
                    <div className='priorities'>
                        <Priority props={{recommend: true, checked: priFlag === 0 }} onClick={() => setPriFlag(0)}>
                            <div className='priority-map'>
                                <img src={IMG_PRI_CHECKED}></img>
                            </div>
                            <p className='priority-desc'>
                                add priority boarding
                            </p>
                            <p className='money'>
                                $10 per passenger each way
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: priFlag === 1}}  onClick={() => setPriFlag(1)}>
                            <div className='priority-map'>
                                <img src={IMG_PRI_UNCHECKED}></img>
                            </div>
                            <p className='priority-desc'>
                                add priority boarding
                            </p>
                            <p className='money'>
                                $10 per passenger each way
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                    <p className='p1'> save yourself some $$$ and check in online for free </p>
                    <p className='p2'>
                        It costs time and resource to check in at the airport, which means it will cost you $25. Or if you want to go the old school way, we do offer pre-paying your airport check-in fee for a lower cost! The choice is yours!
                    </p>
                    <p className='p1'>
                        select your check in option (required)
                    </p>
                    <div className='priorities'>
                        <Priority props={{recommend: false, checked: payFlag === 0 }} onClick={() => setpayFlag(0)}>
                            <div className='priority-map'>
                                <img src={IMG_PREPAY}></img>
                            </div>
                            <p className='priority-desc'>
                                pre-pay airport check-in fee
                            </p>
                            <p className='money'>
                                $15 per passenger each way
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: payFlag === 1}}  onClick={() => setpayFlag(1)}>
                            <div className='priority-map'>
                                <img src={IMG_CHECKINONLINE}></img>
                            </div>
                            <p className='priority-desc'>
                                check in online
                            </p>
                            <p className='money'>
                                $10 per passenger each way
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                </div>
            </div>
            <div className='passenger-buttons'>
                <div>
                    <Link className='info'>passenger info</Link>
                    <Link to='/travelflex' className='continue'>continue</Link>
                </div>
            </div>
            <div className='anoun'>
                <div>
                    <p className='bold'>Legal Notice</p>
                    <p className='thin'>
                        Prices are listed by person, in the original currency their reservation was made. Please <Link to='#'>click here</Link> for information on our policies, regulations and baggage fees. Prices on our website are valid if you purchase services in the same session. If you log off our website, prices may be different next time you log on. Our flight schedules are subject to change due to evolving circumstances related on COVID-19
                    </p>
                    <p className='bold'>Passport Requirement</p>
                    <p className='thin'>
                        RPassengers are responsible for obtaining valid travel documents (passport, visa or other required documents) that comply with the entry and exit requirements for domestic and international flights. Given that entry and exit requirements may change without notice, please consult <a href='www.travel.gc.ca' target='_blank'>www.travel.gc.ca</a> for more information.
                    </p>
                </div>
            </div>

            <Footer></Footer>
        </Wrapper>
    )
}

export default Reser2;