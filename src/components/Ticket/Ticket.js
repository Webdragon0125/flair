import React from "react";

import { Wrapper } from "./Ticket-css";

// Images


const Ticket = ({props}) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Ticket;
