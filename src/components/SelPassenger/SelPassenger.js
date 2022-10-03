import React, {useState} from 'react';

import { Wrapper } from './SelPassenger-css';

// Images
import IMG_PERSON from '../../assets/person.png';
import IMG_SELECT_ALLOW from '../../assets/select-arrow.png';
import IMG_PLUS from '../../assets/plus.png';
import IMG_MINUS from '../../assets/minus.png';

const SelPassenger = () => {
    const [hideFlag, setHideFlag] = useState(false);
    const [cntper, setCntper] = useState([1, 0, 0]);
    return (
        <Wrapper>
            <div className='select-body' onClick={() => setHideFlag(!hideFlag)}>
                <img src={IMG_PERSON} alt=''></img>
                <span>1</span>
                <img src={IMG_SELECT_ALLOW} alt=''></img>
            </div>
            {
                hideFlag ? (
                    <React.Fragment>
                        <div className='select-items'>
                            <div className='item'>
                                <p>
                                    <p>Adults</p>
                                    <span>12 years and older</span>
                                </p>
                                <div className='p-controller'>
                                    <img src={IMG_MINUS} alt='' onClick={() => {
                                        if (cntper[0] > 1) setCntper([cntper[0]-1, cntper[1], cntper[2]]);
                                    }}></img>
                                    <p>{cntper[0]}</p>
                                    <img src={IMG_PLUS} alt='' onClick={() => {
                                        setCntper([cntper[0]+1, cntper[1], cntper[2]]);
                                    }}></img>
                                </div>
                            </div>
                            <div className='item'>
                                <p>
                                    <p>Children</p>
                                    <span>2-11 years at the time of travel</span>
                                </p>
                                <div className='p-controller'>
                                    <img src={IMG_MINUS} alt='' onClick={() => {
                                        if (cntper[1] > 0) setCntper([cntper[0], cntper[1]-1, cntper[2]]);
                                    }}></img>
                                    <p>{cntper[1]}</p>
                                    <img src={IMG_PLUS} alt='' onClick={() => {
                                        setCntper([cntper[0], cntper[1]+1, cntper[2]]);
                                    }}></img>
                                </div>
                            </div>
                            <div className='item'>
                                <p>
                                    <p>Babies</p>
                                    <span>0-23 months at the time of travel</span>
                                </p>
                                <div className='p-controller'>
                                    <img src={IMG_MINUS} alt='' onClick={() => {
                                        if (cntper[2] > 0) setCntper([cntper[0], cntper[1], cntper[2]-1]);
                                    }}></img>
                                    <p>{cntper[2]}</p>
                                    <img src={IMG_PLUS} alt='' onClick={() => {
                                        setCntper([cntper[0], cntper[1], cntper[2]+1]);
                                    }}></img>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ) : null
            }
        </Wrapper>
    )
}

export default SelPassenger;