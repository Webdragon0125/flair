import React, {useState} from 'react';
import { Link } from 'react-router-dom';


// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';
import ReverMap from '../../components/ReverMap/ReverMap';
import PromoCode from '../../components/PromoCode/PromoCode';
import PriceList from '../../components/PriceList/PriceList';
import Footer from '../../components/Footer/Footer';
import Seats from '../../components/Seats/Seats';

// JSONS
import { HEADER } from '../../constant/HEADER';
import { SPECIAL_ITEMS } from '../../constant/SPECIAL_ITEMS';
import { SEAT_INFO } from '../../constant/SEAT_INFO';
import { ABC_BLOCK, DEF_BLOCK } from '../../constant/SEAT_MAP';

// Styled componets
import { Wrapper, Tickets, Priority } from './SeatSelect-css';

// Images

const SeatSelect = () => {
    const [priFlag, setPriFlag] = useState(0);
    const [bags, setBags] = useState(0);
    const [priceListDispalyFlag, setPriceListDisplayFlag] = useState(false);
    const func_seeprice = (e) => {
        e.preventDefault();
        setPriceListDisplayFlag(!priceListDispalyFlag);
    }

    const colors = [
        {
            color: '#FFE600',
            name: 'Selected'
        },
        {
            color: '#FAB065',
            name: 'First row'
        },
        {
            color: '#000000',
            name: 'Emergency exit'
        },
        {
            color: '#8C0AC8',
            name: 'Extra legroom'
        }
    ]

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
                    <div className='tickets' style={{marginTop: '30px', gap: '50px'}}>
                        <div style={{gap: '50px'}}>
                            <Tickets props={{flag: 0}}>
                                <p><span>passenger 1(ADT)</span></p>
                                <p>Raoul Bhatt</p>
                            </Tickets>
                            <Tickets props={{flag: 0}}>
                                <p><span>seat #</span></p>
                                <p>Unselected</p>
                            </Tickets>
                        </div>
                    </div>
                    <div className='kind-seat'>
                        {
                            colors.map((item, index) => (
                                <div key={index} className='kind'>
                                    <svg height="30" width="30">
                                        <circle cx="15" cy="15" r="15" stroke-width="3" fill={item.color} />
                                    </svg>
                                    <p>
                                        {
                                            item.name
                                        }
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='quick-select'>
                        <p>
                            quick-select for all passengers
                        </p>
                        <button>
                            next flight
                        </button>
                    </div>
                    <div className='seats-descs'>
                        {
                            SEAT_INFO.map((item, index) => (
                                <Seats props={item} key={index}></Seats>
                            ))
                        }
                    </div>

                    <div className='seat-map'>
                        <div className='seat-map-container'>
                            <div className='abc-block'>
                                <div className='abc-block-header'>
                                    <span>A</span>
                                    <span>B</span>
                                    <span>C</span>
                                </div>
                                <div className='abc-body'>
                                    {
                                        ABC_BLOCK.map((item1, index1) => (
                                            <div key={index1}>
                                                {
                                                    item1.values.map((item2, index2) => (
                                                        <span key={index2} style={{
                                                            color: item2 === -1 ? 'grey' : item1.color,
                                                            border: item2 === -1 ? 0 : '1px solid '+ item1.color,
                                                            opacity: item2 === 0 ? 0 : 1,
                                                            background: item2 === -1 ? 'grey' : 'white'
                                                        }}
                                                        >${item2}</span>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='coordinates'>
                                <div className='coordinates-header'>
                                    <span>A</span>
                                </div>
                                <div className='coordinates-body'>
                                    <div><span>1</span></div>
                                    <div><span>2</span></div>
                                    <div><span>3</span></div>
                                    <div><span>4</span></div>
                                    <div><span>5</span></div>
                                    <div><span>6</span></div>
                                </div>
                            </div>
                            <div className='abc-block'>
                                <div className='abc-block-header'>
                                    <span>D</span>
                                    <span>E</span>
                                    <span>F</span>
                                </div>
                                <div className='abc-body'>
                                    {
                                        DEF_BLOCK.map((item1, index1) => (
                                            <div key={index1}>
                                                {
                                                    item1.values.map((item2, index2) => (
                                                        <span key={index2}
                                                            style={{
                                                                color: item2 === -1 ? 'grey' : item1.color,
                                                                border: '1px solid '+item1.color,
                                                                opacity: item2 === 0 ? 0 : 1,
                                                            }}
                                                        >${item2}</span>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='passenger-buttons'>
                <div>
                    <Link className='info'>add ons</Link>
                    <Link to='/travelflex' className='continue'>passenger info</Link>
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

export default SeatSelect;