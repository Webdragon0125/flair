import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    box-shadow: ${p => p.flag ? '0 8px 8px #0000000d' : '0'};
    border-bottom: ${p => !p.flag ? `1px solid #e0e1e3` : '0'};
    margin: 0 10px;
    padding: 3px;
    background-color: white;
    cursor: pointer;
    .flight-svg-container {
        margin: 0 10px;
        padding: 10px;
        svg {
            width: 20px;
            fill: ${p => p.theme.borderColor1};
            transform: ${p => p.flag ? 'scaleX(-1)' : 'none'};
        }
    }

    .label-container {
        & p:nth-child(1) {
            color: ${p => p.theme.borderColor1};
        }
    }
`