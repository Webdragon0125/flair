import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { Wrapper } from './TicketInfo-css';

// JSON
import { BUNDLE } from '../../constant/BUNDLE';

// Images
import IMG_FLIGHT from '../../assets/flight.png';
import IMG_CHECKED from '../../assets/checked.png';
import IMG_UNCHECKED from '../../assets/unchecked.png';
import IMG_BAG from '../../assets/bag.png';

const TicketInfo = ({props}) => {

    const [mobileBundleFlag, setMobileBundleFlag] = useState(false);
    // const [testFlag, setTestFlag] = useState(null);
    const [selectBundleFlag, setSelectBundleFlag] = useState(1);

    return (
        <Wrapper isOpen={props.isOpen} mobileBundleFlag={mobileBundleFlag}>
            <div className='usage-mobile'>
                <div className='from-to' onClick={() => setMobileBundleFlag(true)}>
                    <div className='from'>
                        <p>
                            {props.from.time}
                        </p>
                        <span>
                            {props.from.pos[1]}
                        </span>
                    </div>
                    <div className='middle'>
                        <p>
                            {props.travel_time.for}
                        </p>
                        <span>
                            {props.travel_time.plane}
                        </span>
                    </div>
                    <div className='from'>
                        <p>
                            {props.to.time}
                        </p>
                        <span>
                            {props.to.pos[1]}
                        </span>
                    </div>
                </div>
                <div className='price'>
                    <p>value fare</p>
                    <span>${props.price}</span>
                    <button onClick={() => setMobileBundleFlag(true)}>Show details</button>
                </div>
                <div className='mobile-bundle'>
                    <div className='mobile-bundle-header'>
                        <div className='mobile-bundle-header-thm'>
                            <p>Fare select</p>
                            <FaTimes onClick={() => {
                                setMobileBundleFlag(false);
                            }}></FaTimes>
                        </div>
                        <div className='mobile-bundle-header-posi'>
                            <div className='posi'>
                                <img src={IMG_FLIGHT}></img>
                                <p>{props.from.pos[0]} to {props.to.pos[0]}</p>
                            </div>
                            <div className='datetime'>
                                <p> { props.from.date } | { props.to.date }</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-bundle-body'>
                        {
                            BUNDLE.map((item, index) => (
                                <div className='mobile-bundle-body-items' key={index} style={{borderTop: '3px solid '+item.color,}} onClick={() => setSelectBundleFlag(index)}>
                                    <button style={{display: item.recommend ? 'block' : 'none'}}>recommend</button>
                                    <div className='header'>
                                        <div className='left'>
                                            <p>{item.name}</p>
                                        </div>
                                        <div className='right'>
                                            <div>
                                                <p>{item.fee.flag === 0 ? 'no fee' : '+$'+item.fee.pp}</p>
                                                <span>per person</span>
                                            </div>
                                            <img src={index === selectBundleFlag ? IMG_CHECKED : IMG_UNCHECKED}></img>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        {
                                            item.items.map((item1, index1) => (
                                                <div className='index' key={index1}>
                                                    <img src={item1.img}></img>
                                                    <div>
                                                        <p>
                                                            {
                                                                item1.item_name
                                                            }
                                                        </p>
                                                        <span>
                                                            {
                                                                item1.explain
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mobile-bundle-footer'>
                        <Link to={'/reser1'}>continue</Link>
                    </div>
                </div>
            </div>
            <div className='usage-pc'>
                <div className='from-to'>
                    <div className='posi-div'>
                        <p className='posi-p'>
                            {
                                props.from.pos[0]
                            }
                            <span>
                                {
                                    props.from.pos[1]
                                }
                            </span>
                        </p>
                        <p className='data-p'>
                            {
                                props.from.date
                            }
                        </p>
                    </div>
                    <img alt='img'></img>
                    <div className='posi-div'>
                        <p className='posi-p'>
                            {
                                props.to.pos[0]
                            }
                            <span>
                                {
                                    props.to.pos[1]
                                }
                            </span>
                        </p>
                        <p className='data-p'>
                            {
                                props.from.date
                            }
                        </p>
                    </div>
                </div>
                <div className='for-type'>
                    <p>
                        travel time: {props.travel_time.for}
                    </p>
                    <span>
                        {
                            props.travel_time.plane
                        }
                    </span>
                </div>
                <div className='show-price' onClick={() => props.setFlag(props.bundleFlag)}>
                    <p> show price </p>
                    <p> ${props.price} </p>
                    <p> {'per passenger'} </p>
                </div>
            </div>
        </Wrapper>
    )
}



export default TicketInfo;