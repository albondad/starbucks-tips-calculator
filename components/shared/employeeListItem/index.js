import { useState } from 'react'
import * as Shared from '..'
import * as StyledComponents from './styled-components';

export const EmployeeListItem = (props) => {
    const [showBillInformation, setShowBillInformation] = useState(false);

    const handleEmployeeListItemBillInformationHeadOnClick = () => {
        const newShowBillInformation = !showBillInformation;
        setShowBillInformation(newShowBillInformation);
    }
    
    return (
        <StyledComponents.EmployeeListItem key={props.id}>
            <StyledComponents.EmployeeListItemName>{props.name}</StyledComponents.EmployeeListItemName>
            <StyledComponents.EmployeeListItemHours>{props.hours}</StyledComponents.EmployeeListItemHours>   
            <StyledComponents.EmployeeListItemActualTipValue>{props.actualTipValue}</StyledComponents.EmployeeListItemActualTipValue>
            <StyledComponents.EmployeeListItemRoundedTipValue>{props.roundedTipValue}</StyledComponents.EmployeeListItemRoundedTipValue>
            <StyledComponents.EmployeeListItemBillInformation>
                <StyledComponents.EmployeeListItemBillInformationHead onClick={handleEmployeeListItemBillInformationHeadOnClick}>
                    Bill Information
                    <StyledComponents.EmployeeListItemBillInformationHeadIcon>
                        <Shared.Icon 
                            name="expandLess"
                            color="#ffffff"
                            size="24px"
                        />
                    </StyledComponents.EmployeeListItemBillInformationHeadIcon>
                </StyledComponents.EmployeeListItemBillInformationHead>
                <StyledComponents.EmployeeListItemBillInformationBody show={showBillInformation}>
                    <StyledComponents.EmployeeListItemBillInformationBodyRow>
                        <StyledComponents.EmployeeListItemBillInformationBodyRowItem>test</StyledComponents.EmployeeListItemBillInformationBodyRowItem>
                        <StyledComponents.EmployeeListItemBillInformationBodyRowItem>test</StyledComponents.EmployeeListItemBillInformationBodyRowItem>
                    </StyledComponents.EmployeeListItemBillInformationBodyRow>
                </StyledComponents.EmployeeListItemBillInformationBody>
            </StyledComponents.EmployeeListItemBillInformation>
            <StyledComponents.EmployeeListItemDelete>
                <Shared.Icon 
                    name="trash"
                    color="#ffffff"
                    size="24px"
                />
            </StyledComponents.EmployeeListItemDelete>
        </StyledComponents.EmployeeListItem>
    )
}