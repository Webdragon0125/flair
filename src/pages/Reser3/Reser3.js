import React, {useState} from 'react';
import { Link } from 'react-router-dom';


// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';
import ReverMap from '../../components/ReverMap/ReverMap';
import PromoCode from '../../components/PromoCode/PromoCode';
import PriceList from '../../components/PriceList/PriceList';
import Announ from '../../components/Announ/Announ';
import Footer from '../../components/Footer/Footer';

// JSONS
import { HEADER } from '../../constant/HEADER';
import { SPECIAL_ITEMS } from '../../constant/SPECIAL_ITEMS';

// Styled componets
import { Wrapper, Tickets, Priority } from './Reser3-css';

// Imagesh
import IMG_PERSON_ITEM_BAG from '../../assets/personal-item-carry-on-bag.png';
import IMG_PERSON_ITEM from '../../assets/personal-item.png';
import IMG_CHECKED_WHITE from '../../assets/checked-white.png';
import IMG_3_BAGS from '../../assets/3-bags.png';
import IMG_4_BAGS from '../../assets/4-bags.png';
import IMG_5_BAGS from '../../assets/5-bags.png';

const Reser3 = () => {

    const [priFlag, setPriFlag] = useState(0);
    const [bags, setBags] = useState(0);
    const [priceListDispalyFlag, setPriceListDisplayFlag] = useState(false);

    const func_seeprice = (e) => {
        e.preventDefault();
        setPriceListDisplayFlag(!priceListDispalyFlag);
    }
    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
            <ReverMap props={{current: 3}}></ReverMap>
            <div className='select-flight-div'> 
                <div>
                    <p className='label-flight-div'>personalise your trip</p>
                    <div className='select-flight'>
                        <Link to='#' className='to-email'>Enter your email address or phone number to save flight {'>'}</Link>
                        <div className='price'>
                            <p>$340.00 Total</p>
                            <Link to='#' onClick={func_seeprice}>see price breakdown</Link>
                            <PriceList props={{displayFlag: priceListDispalyFlag}}></PriceList>
                        </div>
                        <PromoCode></PromoCode>
                    </div>
                </div>
            </div>
            <div className='personalise-div'>
                <div>
                    <div className='tickets'>
                        <div>
                            <Tickets props={{flag: 0}}>
                                <p>Depart <span>YEG {'->'} YLW</span></p>
                                <p>duration 1h 15m</p>
                            </Tickets>
                            <Tickets props={{flag: 1}}>
                                <p>Depart <span>YLW {'->'} YEG</span></p>
                                <p>duration 1h 15m</p>
                            </Tickets>
                        </div>
                        <button>next flight</button>
                    </div>
                    <p className='p3'>Carry-on bag?</p>
                    <p className='p1'>purchase now to save $5 on your carry-on bag</p>
                    <p className='p2'>Buying online saves you time and money. Ensure that you have enough room for all your items because we have strict personal item limits (15x33x43 cm, 7 kg)</p>
                    <p className='p1'>select your carry-on option (required)</p>
                    <div className='priorities'>
                        <Priority props={{recommend: false, checked: priFlag === 0 }} onClick={() => setPriFlag(0)}>
                            <div className='priority-map'>
                                <img src={IMG_PERSON_ITEM_BAG} style={{width: 'auto', height: '70px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                personal item + carry-on bag
                            </p>
                            <p className='money'>
                                included with bundle
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: priFlag === 1}}  onClick={() => setPriFlag(1)}>
                            <div className='priority-map'>
                                <img src={IMG_PERSON_ITEM} style={{width: 'auto', height: '70px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                personal item
                            </p>
                            <p className='money'>
                                included
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                    <p className='p3'>checked bag?</p>
                    <p className='p1'>make sure you have everything you need</p>
                    <p className='p2'>traveling with lots of stuff? Or planning to brings lots home? Add a checked bag to your reservation quickly and easily</p>
                    <p className='p1'>select your checked bag option (required)</p>
                    <div className='priorities' style={{
                        alignItems: 'center',
                        'justifyContent': 'center'
                    }}>
                        <Priority props={{recommend: false, checked: bags ===  0}} onClick={() => setBags(0)}>
                            <div className='priority-map'>
                                <img src={IMG_3_BAGS} style={{width: 'auto', height: '50px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                3rd checked bag
                            </p>
                            <p className='money'>
                                $82.95
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: bags === 1}}  onClick={() => setBags(1)}>
                            <div className='priority-map'>
                                <img src={IMG_4_BAGS} style={{width: 'auto', height: '50px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                4th checked bag
                            </p>
                            <p className='money'>
                                $82.95
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: bags === 2}}  onClick={() => setBags(2)}>
                            <div className='priority-map'>
                                <img src={IMG_5_BAGS} style={{width: 'auto', height: '50px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                5th checked bag
                            </p>
                            <p className='money'>
                                $82.95
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                    <button className='bigbutton'>
                        + more checked bag options
                    </button>
                    <div className='priorities' style={{
                        alignItems: 'center',
                        'justifyContent': 'center'
                    }}>
                        <Priority props={{recommend: false, checked: bags ===  0}} onClick={() => setBags(0)}>
                            <div className='priority-map'>
                                <img src={IMG_3_BAGS} style={{width: 'auto', height: '50px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                3rd checked bag
                            </p>
                            <p className='money'>
                                $82.95
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: bags === 1}}  onClick={() => setBags(1)}>
                            <div className='priority-map'>
                                <img src={IMG_4_BAGS} style={{width: 'auto', height: '50px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                4th checked bag
                            </p>
                            <p className='money'>
                                $82.95
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                        <Priority  props={{recommend: false, checked: bags === 2}}  onClick={() => setBags(2)}>
                            <div className='priority-map'>
                                <img src={IMG_5_BAGS} style={{width: 'auto', height: '50px'}}></img>
                            </div>
                            <p className='priority-desc'>
                                5th checked bag
                            </p>
                            <p className='money'>
                                $82.95
                            </p>
                            <div className='priority-check'>
                                <img src={IMG_CHECKED_WHITE}></img>
                            </div>
                            <button className='recommend'>recommend</button>
                        </Priority>
                    </div>
                    <p className='p4'>bringing a special item?</p>
                    <div className='special-item-tabbar'>
                        <div className='items'><p>Raoul Bhatt</p></div>
                    </div>
                    <div className='special-items'>
                    {
                        SPECIAL_ITEMS.map((item, index) => (
                            <div className='items'>
                                <div>
                                    <img src={item.img}></img>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                                <div>
                                    <button>add</button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className='passenger-buttons'>
                <div>
                    <Link className='info'>travel flex</Link>
                    <Link to='/travelflex' className='continue'>next flight</Link>
                </div>
            </div>
            <Announ></Announ>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Reser3;