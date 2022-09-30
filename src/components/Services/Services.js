import React from "react";
import styled from "styled-components";

import IMG_RIGHT_DIR from '../../assets/right-dir.png';

const Service = ({props}) => {
    return (
        <Wrapper bgImg={props.img}>
            <img src={props.img} />
            <div className="content">
                <div>
                    <h3> { props.title } </h3>
                    <p> { props.content } </p>
                    <img src={IMG_RIGHT_DIR} />
                </div>
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
    .content {
        position: absolute;
        bottom: 0;
        background-color: white;
        width: 100%;
        padding: 10px 20px;
        border: 1px solid ${p => p.theme.borderColor1};
        div {
            position: relative;
            p {
                width: 90%;
            }
            img {
                position: absolute;
                height: 25px;
                width: 15px;
                top: calc(50% - 12.5px);
                right: 3%;
            }
        }
    }
`

export default Service;