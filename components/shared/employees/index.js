import * as Shared from '..'
import * as StyledComponents from './styled-components';

export const Employees = (props) => {
    return (
        <StyledComponents.Employees>
            <StyledComponents.EmployeesHead>
                <StyledComponents.EmployeesHeadName>NAME</StyledComponents.EmployeesHeadName>
                <StyledComponents.EmployeesHeadHours>HOURS</StyledComponents.EmployeesHeadHours>   
                <StyledComponents.EmployeesHeadActualTipValue>ACTUAL TIP VALUE</StyledComponents.EmployeesHeadActualTipValue>
                <StyledComponents.EmployeesHeadRoundedTipValue>ROUNDED TIP VALUE</StyledComponents.EmployeesHeadRoundedTipValue>
                <StyledComponents.EmployeesHeadBillInformation>BILL INFORMATION</StyledComponents.EmployeesHeadBillInformation>
                <StyledComponents.EmployeesHeadDelete />
            </StyledComponents.EmployeesHead>

            {
                props.employees.map(employee => {
                    return (
                        <StyledComponents.EmployeesRow key={employee.id}>
                            <StyledComponents.EmployeesRowName>{employee.name}</StyledComponents.EmployeesRowName>
                            <StyledComponents.EmployeesRowHours>{employee.hours}</StyledComponents.EmployeesRowHours>   
                            <StyledComponents.EmployeesRowActualTipValue>{employee.actualTipValue}</StyledComponents.EmployeesRowActualTipValue>
                            <StyledComponents.EmployeesRowRoundedTipValue>{employee.roundedTipValue}</StyledComponents.EmployeesRowRoundedTipValue>
                            <StyledComponents.EmployeesRowBillInformation onClick={employee.handleBillInformationOnClick}>
                                <StyledComponents.EmployeesRowBillInformationHead>
                                    Bill Information
                                    <StyledComponents.EmployeesRowBillInformationHeadIcon>
                                        <Shared.Icon 
                                            name="expandLess"
                                            color="#ffffff"
                                            size="24px"
                                        />
                                    </StyledComponents.EmployeesRowBillInformationHeadIcon>
                                </StyledComponents.EmployeesRowBillInformationHead>
                                <StyledComponents.EmployeesRowBillInformationBody show={employee.showBillInformation}>
                                    <StyledComponents.EmployeesRowBillInformationBodyRow>
                                        <StyledComponents.EmployeesRowBillInformationBodyRowItem>test</StyledComponents.EmployeesRowBillInformationBodyRowItem>
                                        <StyledComponents.EmployeesRowBillInformationBodyRowItem>test</StyledComponents.EmployeesRowBillInformationBodyRowItem>
                                    </StyledComponents.EmployeesRowBillInformationBodyRow>
                                </StyledComponents.EmployeesRowBillInformationBody>
                            </StyledComponents.EmployeesRowBillInformation>
                            <StyledComponents.EmployeesRowDelete>
                                <Shared.Icon 
                                    name="trash"
                                    color="#ffffff"
                                    size="24px"
                                />
                            </StyledComponents.EmployeesRowDelete>
                        </StyledComponents.EmployeesRow>
                    )
                })
            }
            {/* <StyledComponents.EmployeesRow>
                <StyledComponents.EmployeesRowName>John Doe</StyledComponents.EmployeesRowName>
                <StyledComponents.EmployeesRowHours>00.00</StyledComponents.EmployeesRowHours>   
                <StyledComponents.EmployeesRowActualTipValue>00.00</StyledComponents.EmployeesRowActualTipValue>
                <StyledComponents.EmployeesRowRoundedTipValue>Show More</StyledComponents.EmployeesRowRoundedTipValue>
                <StyledComponents.EmployeesRowBillInformation>
                    <StyledComponents.EmployeesRowBillInformationHead>
                        Bill Information
                        <StyledComponents.EmployeesRowBillInformationHeadIcon>
                            <Shared.Icon 
                                name="expandLess"
                                color="#ffffff"
                                size="24px"
                            />
                        </StyledComponents.EmployeesRowBillInformationHeadIcon>
                    </StyledComponents.EmployeesRowBillInformationHead>
                    <StyledComponents.EmployeesRowBillInformationBody>
                        <StyledComponents.EmployeesRowBillInformationBodyRow>
                            <StyledComponents.EmployeesRowBillInformationBodyRowItem>test</StyledComponents.EmployeesRowBillInformationBodyRowItem>
                            <StyledComponents.EmployeesRowBillInformationBodyRowItem>test</StyledComponents.EmployeesRowBillInformationBodyRowItem>
                        </StyledComponents.EmployeesRowBillInformationBodyRow>
                    </StyledComponents.EmployeesRowBillInformationBody>
                </StyledComponents.EmployeesRowBillInformation>
                <StyledComponents.EmployeesRowDelete>
                    <Shared.Icon 
                        name="trash"
                        color="#ffffff"
                        size="24px"
                    />
                </StyledComponents.EmployeesRowDelete>
            </StyledComponents.EmployeesRow>

            <StyledComponents.EmployeesRow>
                <StyledComponents.EmployeesRowName>John Doe</StyledComponents.EmployeesRowName>
                <StyledComponents.EmployeesRowHours>00.00</StyledComponents.EmployeesRowHours>   
                <StyledComponents.EmployeesRowActualTipValue>00.00</StyledComponents.EmployeesRowActualTipValue>
                <StyledComponents.EmployeesRowRoundedTipValue>Show More</StyledComponents.EmployeesRowRoundedTipValue>
                <StyledComponents.EmployeesRowBillInformation>
                    <StyledComponents.EmployeesRowBillInformationHead>
                        Bill Information
                        <StyledComponents.EmployeesRowBillInformationHeadIcon>
                            <Shared.Icon 
                                name="expandLess"
                                color="#ffffff"
                                size="24px"
                            />
                        </StyledComponents.EmployeesRowBillInformationHeadIcon>
                    </StyledComponents.EmployeesRowBillInformationHead>
                </StyledComponents.EmployeesRowBillInformation>
                <StyledComponents.EmployeesRowDelete>
                    <Shared.Icon 
                        name="trash"
                        color="#ffffff"
                        size="24px"
                    />
                </StyledComponents.EmployeesRowDelete>
            </StyledComponents.EmployeesRow> */}
        </StyledComponents.Employees>
    )
}

Employees.defaultProps = {
    employees: []
}