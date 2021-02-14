import * as Shared from '..'
import * as StyledComponents from './styled-components';

export const EmployeeList = (props) => {
    return (
        <StyledComponents.EmployeeList>
            <StyledComponents.EmployeeListHead>
                <StyledComponents.EmployeeListHeadName>NAME</StyledComponents.EmployeeListHeadName>
                <StyledComponents.EmployeeListHeadHours>HOURS</StyledComponents.EmployeeListHeadHours>   
                <StyledComponents.EmployeeListHeadActualTipValue>ACTUAL TIP VALUE</StyledComponents.EmployeeListHeadActualTipValue>
                <StyledComponents.EmployeeListHeadRoundedTipValue>ROUNDED TIP VALUE</StyledComponents.EmployeeListHeadRoundedTipValue>
                <StyledComponents.EmployeeListHeadBillInformation>BILL INFORMATION</StyledComponents.EmployeeListHeadBillInformation>
                <StyledComponents.EmployeeListHeadDelete />
            </StyledComponents.EmployeeListHead>

            {
                props.list.map(item => {
                    return (
                        <Shared.EmployeeListItem
                            key={item.id}
                            name={item.name}
                            hours={item.hours}
                            actualTipValue={item.actualTipValue}
                            roundedTipValue={item.roundedTipValue}
                        />
                    )
                })
            }
        </StyledComponents.EmployeeList>
    )
}

EmployeeList.defaultProps = {
    list: []
}