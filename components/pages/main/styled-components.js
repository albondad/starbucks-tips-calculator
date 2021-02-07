import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

    body {
        margin: 0px;
        font-family: Roboto;
    }
`

export const Main = styled.div`
    width: 80%;
    margin:auto;
`

export const MainForms = styled.div`
    display: flex;
    align-items: stretch;
`

export const MainFormsItem = styled.div`
    flex-grow: 1;
    :first-of-type {
        padding-right: 16px;
    }
    :last-of-type {
        padding-left: 16px;
    }
`

export const MainFormsItemBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const MainFormsItemBodyInput = styled.div`
    justify-self: center;

    :not(:first-of-type) {
        margin-top: 16px;
    };
`

export const MainFormsItemBodyButton = styled.div`
    display: flex;
    flex-grow: 1;
    margin-top: 16px;
    justify-content: flex-end;
    align-items: flex-end;
`

export const MainStatistics = styled.div`
    margin-top: 32px;
`

export const MainStatisticsBody = styled.div`
    display: flex;
`

export const MainStatisticsBodyItem = styled.div`
    flex-basis: 0;
    flex-grow: 1;
`

export const MainEmployees = styled.div`
    margin-top: 32px;
`