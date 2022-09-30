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
                        <div className="link-cont">
                            <div className="link-wrapper">
                                <HEADER_NavLink className='link hover-6' to={item.url} key={index} flag={item.flag}>
                                    <img src={item.img}>
                                    </img>
                                    {
                                        item.content
                                    }
                                </HEADER_NavLink>
                            </div>
                        </div>
                        
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


        .link-cont {
            position: relative;
        }

        .link {
            position: relative;
            text-decoration: none;
            padding: 10px 0;
            color: ${p => p.theme.fontColor};
        }

        .link-wrapper {
            position: relative;
            display: block;
            padding: 20px 0;
        }

        .inner-wrapper {
            position: relative;
            display: inline-block;
        }

        /* hover styles */

        .hover-6 {
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 50%;
                height: 3px;
                background-color: ${p => p.theme.themeColor1};
                transform: scaleX(0);
                transform-origin: bottom left;

                transition: transform 0.3s;
            }

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                left : 50%;
                height: 3px;
                background-color: ${p => p.theme.themeColor1};
                transform: scaleX(0);
                transform-origin: bottom right;
                transition: transform 0.3s;
            }

            &:hover {
                &:before {
                    transform: scaleX(1);
                }

                &:after {
                    transform: scaleX(1);
                }
            }
        }
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