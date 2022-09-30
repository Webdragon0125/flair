import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";

// Images
import IMG_LOGO from '../../assets/logo.png';
import IMG_RIGHT from '../../assets/right.png';
import IMG_RESPON from '../../assets/responsive.png';

// Components
import LeftIconedBtn from "../LeftIconedBtn/LeftIconedBtn";

const Header = ({props}) => {

    useEffect(() => {
        console.log(props);
    }, [])

    const btnProps = {
        content: 'sign in',
        img: IMG_RIGHT,
        colFlag: 1,
        displayFlag: 1
    }

    return (
        <Wrapper>
            <div className="logo">
                <img src={IMG_LOGO}></img>
            </div>
            <div className="navbars">
                {
                    props.map((item, index) => (
                        <HEADER_NavLink to={item.url} key={index} flag={item.flag}>
                            <img src={item.img}>
                            </img>
                            {
                                item.content
                            }
                        </HEADER_NavLink>
                    ))
                }
                <LeftIconedBtn props={btnProps}></LeftIconedBtn>
                <ResponIcon>
                    <img src={IMG_RESPON}></img>
                </ResponIcon>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    .logo {
        img {
            height: 30px;
        }
    }
    .navbars {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
`
const HEADER_NavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 30px;
    }
    text-decoration: none;
    color: ${p => p.theme.fontColor};
    white-space: nowrap;

    ${p => {
        if (p.flag === 1) {
            return css`
                @media screen and (max-width: ${p => p.theme.media1}) {
                    display: none;
                }
            `
        }
    }}
`

const ResponIcon = styled.div`
    img {
        height: 20px;
    }

    display: none;

    ${p => {
        return css`
            @media screen and (max-width: ${p => p.theme.media1}) {
                display: block;
            }
        `
    }}
`

export default Header;