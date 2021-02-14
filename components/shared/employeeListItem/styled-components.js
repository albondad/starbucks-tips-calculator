import styled from 'styled-components';

export const EmployeeListItemj = styled.div`
`

export const EmployeeListItemjHead = styled.div`
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
`

export const EmployeeListItemjHeadName = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListItemjHeadHours = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListItemjHeadActualTipValue = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListItemjHeadRoundedTipValue = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListItemjHeadBillInformation = styled.div`
    flex-basis: 0;
    flex-grow: 1.5;
    font-size: 12px;
    font-weight: 700;
`

export const EmployeeListItemjHeadDelete = styled.div`
    width: 24px;
    height: 24px;
`

export const EmployeeListItem = styled.div`
    display: flex;
    margin-top: 16px;
    border-radius: 8px;
    background-color: #00805C;
    padding: 20px
`

export const EmployeeListItemName = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListItemHours = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListItemActualTipValue = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListItemRoundedTipValue = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    height: 24px;
    color: #ffffff;
`

export const EmployeeListItemBillInformation = styled.div`
    flex-basis: 0;
    flex-grow: 1.5;
    color: #ffffff;
`

export const EmployeeListItemBillInformationHead = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 2;
    align-items: center;
    color: #ffffff;
`

export const EmployeeListItemBillInformationHeadIcon = styled.div`
    display: flex;
    align-items: center;
    margin-left: 4px;
`

export const EmployeeListItemBillInformationBody = styled.div`
    display: ${props => props.show ? 'display' : 'none'};
    margin-top: 16px;
    width: 128px;
`

export const EmployeeListItemBillInformationBodyRow = styled.div`
    display: flex;
`

export const EmployeeListItemBillInformationBodyRowItem = styled.div`
    display: flex;
    flex-grow: 1;

    :last-of-type {
        justify-content: flex-end;
    }
`

export const EmployeeListItemDelete = styled.div`
    width: 24px;
    height: 24px;
`