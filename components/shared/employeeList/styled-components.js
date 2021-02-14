import styled from 'styled-components';

export const EmployeeList = styled.div`
`

export const EmployeeListHead = styled.div`
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
`

export const EmployeeListHeadName = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListHeadHours = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListHeadActualTipValue = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListHeadRoundedTipValue = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListHeadBillInformation = styled.div`
    flex-basis: 0;
    flex-grow: 1.5;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListHeadDelete = styled.div`
    width: 24px;
    height: 24px;
`

export const EmployeeListRow = styled.div`
    display: flex;
    margin-top: 16px;
    border-radius: 8px;
    background-color: #00805C;
    padding: 20px
`

export const EmployeeListRowName = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListRowHours = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListRowActualTipValue = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListRowRoundedTipValue = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListRowBillInformation = styled.div`
    flex-basis: 0;
    flex-grow: 1.5;
    color: #ffffff;
`

export const EmployeeListRowBillInformationHead = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 2;
    align-items: center;
    color: #ffffff;
`

export const EmployeeListRowBillInformationHeadIcon = styled.div`
    display: flex;
    align-items: center;
    margin-left: 4px;
`

export const EmployeeListRowBillInformationBody = styled.div`
    display: ${props => props.show ? 'display' : 'none'};
    margin-top: 16px;
    width: 128px;
`

export const EmployeeListRowBillInformationBodyRow = styled.div`
    display: flex;
`

export const EmployeeListRowBillInformationBodyRowItem = styled.div`
    display: flex;
    flex-grow: 1;

    :last-of-type {
        justify-content: flex-end;
    }
`

export const EmployeeListRowDelete = styled.div`
    width: 24px;
    height: 24px;
`