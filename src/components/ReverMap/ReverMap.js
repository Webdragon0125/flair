import React, {useState} from 'react'
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

// Images
import IMG_DOWN_DIR from '../../assets/down-dir.png';

// Styled Components
import { Wrapper } from './ReverMap-css';

const ReverMap = ({props}={}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper props={{isOpen, current: props.current }}>
            <div>
                <StepFlag to={'/reser1'} props={{flag: true, index: 1, current: props.current}}> 1 </StepFlag>
                <p>passenger info</p>
                <StepFlag to={'/reser2'} props={{flag: false, index: 2, current: props.current}}> 2 </StepFlag>
                <p> personalize </p>
                <StepFlag to={'/reser3'} props={{flag: false, index: 3, current: props.current}}> 3 </StepFlag>
                <p> seats </p>
                <StepFlag to={'/reser4'} props={{flag: false, index: 4, current: props.current}}> 4 </StepFlag>
                <p> payment </p>
                <StepFlag to={'/reser5'} props={{flag: false, index: 5, current: props.current}}> 5 </StepFlag>
                <img src={IMG_DOWN_DIR} alt='' onClick={() => setIsOpen(!isOpen)}></img>
            </div>
        </Wrapper>
    )
}

const StepFlag = styled(Link)`
    color: black;
    background-color: white;
    width: 35px;
    height: 35px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    text-decoration: none;
    @media screen and (max-width: 850px) {
        width: 80%;
    }
    ${p => {
        if (p.props.index <= p.props.current) {
            return css`
                color: white !important;
                background-color: black !important;
            `
        }
    }}
`

export default ReverMap;