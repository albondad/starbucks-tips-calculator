import React, { useState, useEffect } from 'react'
import * as Shared from '../../shared';
import * as StyledComponents from './styled-components';
import * as uuid from 'uuid'

export const Main = () => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [hoursInputValue, setHoursInputValue] = useState('');
    const [onesInputValue, setOnesInputValue] = useState('');
    const [fivesInputValue, setFivesInputValue] = useState('');
    const [tensInputValue, setTensInputValue] = useState('');
    const [twentysInputValue, setTwentysInputValue] = useState('');
    const [fiftysInputValue, setFiftysInputValue] = useState('');
    const [hundredsInputValue, setHundredsInputValue] = useState('');
    const [totalHours, setTotalHours] = useState('00');
    const [totalTips, setTotalTips] = useState('00.00');
    const [totalActualTipValues, setTotalActualTipValues] = useState('00');
    const [totalRoundedTipValues, setTotalRoundedTipValues] = useState('00.00');
    const [employees, setEmployees] = useState([
        {
            id: '1',
            name: 'John Doe',
            hours: '00.00',
            showBillInformation: true,
            actualTipValue: '00.00',
            roundedTipValue: '00.00'
        },
        {
            id: '2',
            name: 'Jane Doe',
            hours: '00.00',
            showBillInformation: false,
            actualTipValue: '00.00',
            roundedTipValue: '00.00'
        },
    ])

    useEffect(() => {
        udpateEmployees();
    }, [employees.length])

    //utility
    const udpateEmployees = () => {
        const newEmployees = [...employees];
        newEmployees.forEach(employee => {
            employee.handleBillInformationOnClick = () => handleBillInformationOnClick(employee.id)
        })
        setEmployees(newEmployees);
    }
    

    //handlers
    const handleNameInputOnChange = (event) => {
        console.log('handleNameInputOnChange', event.target.value);
        const newNameInputValue = event.target.value;
        setNameInputValue(newNameInputValue);
    }

    const handleHoursInputOnChange = (event) => {
        console.log('handleHoursInputOnChange', event.target.value);
        const newHoursInputValue = event.target.value;
        setHoursInputValue(newHoursInputValue);
    }

    const handleOnesInputOnchange = (event) => {
        console.log('handleOnesInputOnchange', event.target.value);
        const newOnesInputValue = event.target.value;
        setOnesInputValue(newOnesInputValue);
    }

    const handleFivesInputOnchange = (event) => {
        console.log('handleFivesInputOnchange', event.target.value);
        const newFivesInputValue = event.target.value;
        setFivesInputValue(newFivesInputValue);
    }

    const handleTensInputOnchange = (event) => {
        console.log('handleTensInputOnchange', event.target.value);
        const newTensInputValue = event.target.value;
        setTensInputValue(newTensInputValue);
    }

    const handleTwentysInputOnchange = (event) => {
        console.log('handleTwentysInputOnchange', event.target.value);
        const newTwentysInputValue = event.target.value;
        setTwentysInputValue(newTwentysInputValue);
    }

    const handleFiftysInputOnchange = (event) => {
        console.log('handleFiftysInputOnchange', event.target.value);
        const newFiftysInputValue = event.target.value;
        setFiftysInputValue(newFiftysInputValue); 
    }

    const handleHundredsInputOnchange = (event) => {
        console.log('handleHundredsInputOnchange', event.target.value);
        const newHundredsInputValue = event.target.value;
        setHundredsInputValue(newHundredsInputValue);  
    }

    const handleAddButtonOnClick = () => {
        console.log('handleAddButtonOnClick', 'clicked');
        const newEmployees = [...employees];

        const id = uuid.v4();
        const name = nameInputValue;
        const hours = hoursInputValue;
        const employee = {
            id: uuid.v4(),
            name: nameInputValue,
            hours: hoursInputValue,
            showBillInformation: false,
            //handleBillInformationOnClick: () => {handleBillInformationOnClick(id)}
        }
        newEmployees.push(employee);
        setNameInputValue('');
        setHoursInputValue('');
        setEmployees(newEmployees);
    }

    const handleUpdateButtonOnClick = () => {
        console.log('handleUpdateButtonOnClick', 'clicked')
        setOnesInputValue('');
        setFivesInputValue('');
        setTensInputValue('');
        setTwentysInputValue('');
        setFiftysInputValue('');
        setHundredsInputValue('');
    }

    const handleBillInformationOnClick = (id) => {
        console.log('handleBillInformationOnClick', id);
        console.log('handleBillInformationOnClick', employees);
        const newEmployees = [...employees];
        const index = newEmployees.findIndex(employee => employee.id === id);
        console.log(newEmployees[index]);
        newEmployees[index].showBillInformation = !newEmployees[index].showBillInformation;
        setEmployees(newEmployees);
    }

    const handleDeleteOnClick = (id) => {
        
    }

    return (
        <StyledComponents.Main>
            <StyledComponents.GlobalStyle />
            <StyledComponents.MainForms>
                <StyledComponents.MainFormsItem>
                        <Shared.Card
                            label='Add Employees'
                            iconName="personAdd"
                        >
                        <StyledComponents.MainFormsItemBody>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='Name'
                                    value={nameInputValue}
                                    onChange={handleNameInputOnChange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='Hours'
                                    value={hoursInputValue}
                                    onChange={handleHoursInputOnChange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyButton>
                                <Shared.Button
                                    label='Add'
                                    onClick={handleAddButtonOnClick}
                                />
                            </StyledComponents.MainFormsItemBodyButton>
                            
                    </StyledComponents.MainFormsItemBody>
                        </Shared.Card>
                </StyledComponents.MainFormsItem>

                <StyledComponents.MainFormsItem>
                        <Shared.Card
                            label='Update Bill Information'
                            iconName="attachMoney"
                        >
                        <StyledComponents.MainFormsItemBody>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='1s'
                                    value={onesInputValue}
                                    onChange={handleOnesInputOnchange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='5s'
                                    value={fivesInputValue}
                                    onChange={handleFivesInputOnchange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='10s'
                                    value={tensInputValue}
                                    onChange={handleTensInputOnchange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='20s'
                                    value={twentysInputValue}
                                    onChange={handleTwentysInputOnchange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='50s'
                                    value={fiftysInputValue}
                                    onChange={handleFiftysInputOnchange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='100s'
                                    value={hundredsInputValue}
                                    onChange={handleHundredsInputOnchange}
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyButton>
                                <Shared.Button
                                    label='Update'
                                    onClick={handleUpdateButtonOnClick}
                                />
                            </StyledComponents.MainFormsItemBodyButton>
                            
                    </StyledComponents.MainFormsItemBody>
                        </Shared.Card>
                </StyledComponents.MainFormsItem>
            </StyledComponents.MainForms>

            <StyledComponents.MainStatistics>
                <Shared.Card
                    label="Statistics"
                    iconName='barChart'
                >
                    <StyledComponents.MainStatisticsBody>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Hours'
                                value={totalHours}
                            />
                        </StyledComponents.MainStatisticsBodyItem>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Tips'
                                value={totalTips}
                            />
                        </StyledComponents.MainStatisticsBodyItem>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Actual Tip Values'
                                value={totalActualTipValues}
                            />
                        </StyledComponents.MainStatisticsBodyItem>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Rounded Tip Values'
                                value={totalRoundedTipValues}
                            />
                        </StyledComponents.MainStatisticsBodyItem>

                    </StyledComponents.MainStatisticsBody>
                </Shared.Card>
            </StyledComponents.MainStatistics>
            <StyledComponents.MainEmployees>
                <Shared.Card
                    label="Employees"
                    iconName='groups'
                >
                    <Shared.Employees employees={employees}/>
                </Shared.Card>
            </StyledComponents.MainEmployees>
        </StyledComponents.Main>
    )
};