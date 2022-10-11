import React from 'react';
import styled from 'styled-components';

import IMG_BAG from '../../assets/bag.png';
import IMG_UNCHECKED from '../../assets/unchecked.png';
import IMG_CHECKED from '../../assets/checked.png'

// Styled components
import {
    Wrapper
} from './Bundle-css';

const Bundle = ({props}) => {
    return (
        <Wrapper checked={props.checked} onClick={() => { props.setBundle(props.bundle)}}>
            <h1>{props.name}</h1>
            <div className='fee-div'>
                <h2>{ props.fee.flag === 0 ? 'no fee' : <><span>+${props.fee.pp}</span>{' per passenger'}</> }</h2>            
                <h3>
                    {
                        props.fee.flag !== 0 ? `Save $${props.fee.save} with the basic bundle` : ''
                    }
                </h3>
            </div>
            <div className='p-items'>
                {
                    props.items.map((item, index) => (
                        <div className='p-items' key={index}>
                            <img src={item.img} alt=''></img>
                            <div className='p-item-info'>
                                {
                                    <>
                                        <p>{item.item_name}</p>
                                        <p>{item.explain}</p>
                                    </>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                props.recommend ? <div className='recommend'>recommend</div> : null
            }
            <div className='img-checked'>
                <img src={props.checked ? IMG_CHECKED : IMG_UNCHECKED} alt=''></img>
            </div>
        </Wrapper>
    )
}



export default Bundle;