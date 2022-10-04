import React, {useState, useEffect} from 'react'

// Images
import IMG_DOWN_DIR from '../../assets/down-dir.png';

// Styled Components
import { Wrapper, StepFlag } from './ReverMap-css';

const ReverMap = ({props}={}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper props={{isOpen, current: 1 }}>
            <StepFlag props={{flag: true}}> 1 </StepFlag>
            <p>passenger info</p>
            <StepFlag props={{flag: false}}> 2 </StepFlag>
            <p> personalize </p>
            <StepFlag props={{flag: false}}> 3 </StepFlag>
            <p> seats </p>
            <StepFlag props={{flag: false}}> 4 </StepFlag>
            <p> payment </p>
            <StepFlag props={{flag: false}}> 5 </StepFlag>
            <img src={IMG_DOWN_DIR} alt='' onClick={() => setIsOpen(!isOpen)}></img>
        </Wrapper>
    )
}

export default ReverMap;