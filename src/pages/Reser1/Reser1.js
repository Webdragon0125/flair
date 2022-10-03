import React from 'react';

// Components
import Inform from '../../components/Inform/Inform';
import Header from '../../components/Header/Header';

// Styled components
import { Wrapper } from './Rever1-css';

// JSONS
import { HEADER } from '../../constant/HEADER';

const Reser1 = () => {
    return (
        <Wrapper>
            <Inform></Inform>
            <Header props={HEADER}></Header>
        </Wrapper>
    )
}

export default Reser1;