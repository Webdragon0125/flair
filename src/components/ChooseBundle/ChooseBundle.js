import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


import Bundle from '../Bundle/Bundle';
import { BUNDLE } from '../../constant/BUNDLE';

import {
    Wrapper
} from './ChooseBundle-css';

const ChooseBundle = ({props}) => {

    const [bundleFlag, setBundleFlag] = useState(-1);

    useEffect(() => {
        BUNDLE.map((item, index) => {
        if (item.recommend) {
            setBundleFlag(index);
        }
        })
    }, [])
    
    return (
        <Wrapper displayFlag={props.displayFlag}>
            <div className='bundles'>
                <h1>Choose a bundle</h1>
                <div className='bundle-items'>
                {
                    BUNDLE.map((item, index) => (
                    <Bundle 
                        props={{...item, checked: index === bundleFlag ? true : false, setBundle:setBundleFlag, bundle: index}} key={index}
                    ></Bundle>
                    ))
                }
                </div>
            </div>
            <div className='continue'>
                <Link to='/reser1'>continue</Link>
            </div>
        </Wrapper>
    )
}

export default ChooseBundle;