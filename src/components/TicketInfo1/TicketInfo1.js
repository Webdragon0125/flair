import React from 'react';

import { Wrapper } from './TicketInfo1-css';

const TicketInfo1 = ({props}) => {
    return (
        <Wrapper isOpen={props.isOpen}>
            <p className='kind'>
                {props.kind}
            </p>
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
                    Travel time: {props.travel_time.for}
                </p>
                <span>
                    {
                        props.travel_time.plane
                    }
                </span>
            </div>
        </Wrapper>
    )
}



export default TicketInfo1;