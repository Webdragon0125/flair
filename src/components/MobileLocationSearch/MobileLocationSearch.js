import React, { useState } from "react";
import styled from "styled-components";

// Icons
import { FaTimes } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';

const MobileLocationSearch = ({ props }) => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <Wrapper displayFlag={props.displayFlag}>
            <div className='header-theme'>
                <p>select destinations</p>
                <FaTimes onClick={() => props.setDisplayFlag(false)}></FaTimes>
            </div>
            <div className="search-input">
                <AiOutlineSearch></AiOutlineSearch>
                <input placeholder="Enter city or airport" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
            </div>
            <div className="list-header">
                all destinations
            </div>

            {
                props.options.sort((a, b) => a.label > b.label ? 1 : -1).filter(item => item.label.toLowerCase().indexOf(searchValue.toLowerCase()) != -1).map(item => (
                    <div key={item.index} className='list-item'>
                        <div className="labels">
                            <p>
                                {
                                    item.label
                                }
                            </p>
                            <p>
                                {
                                    item.country
                                }
                            </p>
                        </div>
                        <span className="check">
                            <BsCheck></BsCheck>
                        </span>
                    </div>
                ))
            }

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    transition: all .5s;
    top: ${p => p.displayFlag ? '0' : '100vh'};
    z-index: 107;
    background-color: #f4f4f4;
    .header-theme {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${p => p.theme.themeColor};
        padding: 10px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px #0000000d, 0 2px 4px #0000000f;
    }
    .search-input {
        background-color: white;
        margin: 10px;
        border-radius: 3px;
        box-shadow: 0 2px 4px #0000000d, 0 2px 4px #0000000f;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        color: ${p => p.theme.borderColor1};
        svg {
            margin: 15px;
            transform: scale(1.3);
        }
        input {
            font-size: 15px;
            border: 0;
            outline: 0;
        }
    }
    .list-header {
        padding: 15px;
        margin: 10px;
        background-color: white;
        border-radius: 3px;
        color: ${p => p.theme.themeColor1};
        font-weight: bold;
    }
    .list-item {
        margin: 0 10px;
        border-bottom: 1px solid #e0e1e3;
        background-color: white;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .labels {
            & :nth-child(2) {
                color: ${p => p.theme.borderColor1};
            }
        }
        .check {
            padding: 5px;
        }
    }
`

export default MobileLocationSearch;