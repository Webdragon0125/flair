import React from "react";

import {
    Wrapper
} from './Seat-css';

import IMG_ROUND_UNCHECK from '../../assets/round/round-unchecked.png';
import IMG_ROUND_CHECK   from '../../assets/round/round-checked.png';

const Seats = ({props}) => {
    return (
        <Wrapper>
            <div>
                <div className="svg">
                    <svg height="20" width="20">
                        <circle cx="10" cy="10" r="10" stroke-width="3" fill={props.color} />
                    </svg>
                </div>
                <div className="desc">
                    <p>
                        {
                            props.desc1
                        }
                    </p>
                    <p>
                        {
                            props.desc2
                        }
                    </p>
                    <span>
                        ${
                            props.price + ' per passenger'
                        }
                    </span>
                </div>
            </div>
            <img src={IMG_ROUND_UNCHECK}></img>
        </Wrapper>
    )
}

export default Seats;