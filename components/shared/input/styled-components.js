import styled from 'styled-components';

export const Input = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
`

export const InputLabel = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-weight:700;
`

export const InputArea = styled.input`
    flex-basis: 0;
    flex-grow: 3;
    box-sizing: border-box;
    border-color: #dddddd;
    border-style: solid;
    border-radius: 8px;
    height: 100%;
`