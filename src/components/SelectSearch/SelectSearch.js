import React, {useState, useEffect} from "react";
import styled from "styled-components";

const SelectSearch = () => {

    const options = [
        { name: 'New York' },
        { name: 'BeiJing' },
        { name: 'Moscow' },
        { name: 'Kyoto' },
        { name: 'Tokyo' },
        { name: 'Berlin' },
    ]

    const [filteredResult, setFilteredResult] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const valueChanged = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {
        func_setFilteredResult()
    }, [inputValue])
    
    const func_setFilteredResult = () => {
        if (inputValue === '') {
            setFilteredResult(options);
        } else {
            setFilteredResult(options.filter((item) => item.name.toLocaleLowerCase().indexOf(inputValue.toLocaleLowerCase()) !== -1));
        }
    }

    const [filterdivflag, setFilterdivflag] = useState(false);

    return (
        <Wrapper filterdivflag={filterdivflag}>
            <input type={'text'} placeholder={'Where to ?'} value={inputValue} onChange={valueChanged} onFocus={() => setFilterdivflag(!filterdivflag)} 
                // onBlur={() => setFilterdivflag(false)}
            ></input>
            <div className="filtered">
                {
                    filteredResult.map((item, index) => (
                        <div className="filterd-items" key={index} onClick={() => {
                            setInputValue(item.name);
                            setFilterdivflag(false);
                        }}>
                            {item.name}
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 300px;

    @media screen and (max-width: 800px) {
        width: 100%;
    }

    input {
        width: 100%;
        font-weight: 900;
        font-size: 30px;
        border: 1px solid ${p => p.theme.borderColor1};
        outline: 0;
        padding: 10px;
        border-radius: 15px;
        padding-left: 20px;
        @media screen and (max-width: 800px) {
            text-align: center;
        }
    }
    .filtered {
        z-index: 100;
        margin-top: 5px;
        width: 100%;
        padding-left: 3px;
        position: absolute;
        display: ${p => p.filterdivflag ? p.theme.borderColor1 : 'none'};
        border: 1px solid ${p => p.theme.fontColor};
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 10px;
        .filterd-items {
            cursor: pointer;
            padding: 5px;
            &:hover {
                /* outline: 1px solid ${p => p.theme.themeColor}; */
            }
        }
    }
`

export default SelectSearch;