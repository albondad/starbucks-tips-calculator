import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-color: #eeeeee;
    border-style: solid;
    border-radius: 8px;
    padding: 48px 32px;
    height: 100%;
`

export const CardHeader = styled.div`
    display: flex;
    font-size: 20px;
`

export const CardHeaderLabel = styled.div`
    display: flex-start;
    justify-content: flex-end;
    flex-grow: 1;
    font-weight: 700;
`

export const CardHeaderIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
`

export const CardBody = styled.div`
    flex-grow: 1;
    margin-top: 32px;
    height: 100%;
`