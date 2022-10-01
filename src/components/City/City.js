import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const City = ({props}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <Wrapper bgImg={props.img} data-aos="zoom-out-right" data-aos-duration="1500">
            <img src={props.img} />
            <div>
                <h3> { props.name } </h3>
                <h6> { props.date } </h6>
                <p>
                    {
                        props.ticket
                    }

                    <span>
                        $ {
                            props.price
                        }
                    </span>
                </p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${p => p.theme.fontColor};
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        transition: all .2s;
        &:hover {
            transform: scale(1.3);
        }
    }
    div {
        position: absolute;
        bottom: 0;
        background-color: white;
        width: 100%;
        padding: 5px 10px;
    }
`

export default City;