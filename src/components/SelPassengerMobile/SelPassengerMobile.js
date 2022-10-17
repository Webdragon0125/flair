import React from 'react';
import styled from 'styled-components';

import { FaUserAlt } from 'react-icons/fa';

const SelPassengerMobile = ({ props }) => {
    return (
        <Wrapper>
            <div className='flight-svg-container'>
                <FaUserAlt></FaUserAlt>
            </div>
            <div className='label-container'>
                <p>passengers</p>
                <p>
                    {
                        props.cntper[0] + ' adult' + (props.cntper[1] !== 0 ? `, ${props.cntper[1]} children` : '') + (props.cntper[2] !== 0 ? `, ${props.cntper[2]} baby` : '')
                    }
                </p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    box-shadow: 0 8px 8px #0000000d;
    border-bottom: 1px solid #e0e1e3;
    margin: 0 10px;
    padding: 3px;
    background-color: white;
    cursor: pointer;
    .flight-svg-container {
        margin: 0 10px;
        padding: 10px;
        svg {
            width: 20px;
            fill: ${p => p.theme.borderColor1};
        }
    }

    .label-container {
        & p:nth-child(1) {
            color: ${p => p.theme.borderColor1};
            font-size: 14px;
        }
    }
`

export default SelPassengerMobile;