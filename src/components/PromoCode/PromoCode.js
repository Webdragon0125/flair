import React from 'react';
import styled from 'styled-components';

//Images
import IMG_PROMOCODE from '../../assets/ps_promo.png';

const PromoCode = () => {
    return (
        <Wrapper>
            <img src={IMG_PROMOCODE} alt='promo'></img>
            <span>apply promo code</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    img {
        width: 30px;
    }
`
export default PromoCode