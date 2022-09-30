import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppContext from "../../context/context";

import IMG_REMOVE_INFORM from '../../assets/remove_inform.png';

const Inform = () => {
    const AppContextProps = useContext(AppContext);

    return (
        <Wrapper flag={AppContextProps.informFlag}>
            <div>
                <img src={IMG_REMOVE_INFORM} onClick={() => AppContextProps.setInformFlag(false)}></img>
                <p>Due to incresed airport security processing time, we've made changes to our airport chek-in time for departures from Vancouver, Edmonton, Calgary, Ottawa , Kitchener-Warterloo and Abbotsford.</p>
            </div>
            <Link to='#'>
                {'View All >'}
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: ${p => p.theme.themeColor};
    padding: 10px 50px;

    font-size: 13px;

    display: ${p => p.flag ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 20px;
            margin: 0 2px;
            transition: all .2s;
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    a {
        color: ${p => p.theme.themeColor1};
        font-weight: bold;
    }
`

export default Inform;