import React, {useEffect, useState, useRef} from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    Modal,
    TextField,
    Typography,
} from '@material-ui/core'
import getEmployeesWithActualTipValues from '../../../utilities/get-employees-with-actual-tip-values';
import getEmployeesWithRoundedTipValues from '../../../utilities/get-employees-with-rounded-tip-values'
import getTipRate from '../../../utilities/get-tip-rate';
import getTotalActualTipValues from '../../../utilities/get-total-actual-tip-values';
import getTotalHours from '../../../utilities/get-total-hours';
import getTotalRoundedTipValues from '../../../utilities/get-total-rounded-tip-values';
import getTotalTips from '../../../utilities/get-total-tips';
import { GlobalStyle } from './styled-components';


const Application = () => {
    useEffect(() => {
        // console.clear();
        // console.log(JSON.stringify(employees));
        // console.log(tipRate)
    })

    const [employees, setEmployees] = useState([]);
    const [bills, setBills] = useState({});
    const [totalTips, setTotalTips] = useState(0);
    const [totalActualTipValues, setTotalActualTipValues] = useState(0);
    const [totalRoundedTipValues, setTotalRoundedTipValues] = useState(0);
    const [totalHours, setTotalHours] = useState(0);
    const [tipRate, setTipRate] = useState(0);
    const [textFieldValueNumberOf1s, setTextFieldValueNumberOf1s] = useState(0);
    const [textFieldValueNumberOf5s, setTextFieldValueNumberOf5s] = useState(0);
    const [textFieldValueNumberOf10s, setTextFieldValueNumberOf10s] = useState(0);
    const [textFieldValueNumberOf20s, setTextFieldValueNumberOf20s] = useState(0);
    const [textFieldValueNumberOf50s, setTextFieldValueNumberOf50s] = useState(0);
    const [textFieldValueNumberOf100s, setTextFieldValueNumberOf100s] = useState(0);
    const [textFieldValueName, setTextFieldValueName] = useState('');
    const [textFieldValueHours, setTextFieldValueHours] = useState('');
    
    const textFieldOnChangeNumberOf1s = (event) => {
        const newTextFieldValueNumberOf1s = parseInt(event.target.value.length === 0 ? 0 : event.target.value);
        setTextFieldValueNumberOf1s(newTextFieldValueNumberOf1s);
    }

    const textFieldOnChangeNumberOf5s = (event) => {
        const newTextFieldValueNumberOf5s = parseInt(event.target.value.length === 0 ? 0 : event.target.value);
        setTextFieldValueNumberOf5s(newTextFieldValueNumberOf5s);
    }

    const textFieldOnChangeNumberOf10s = (event) => {
        const newTextFieldValueNumberOf10s = parseInt(event.target.value.length === 0 ? 0 : event.target.value);
        setTextFieldValueNumberOf10s(newTextFieldValueNumberOf10s);
    }

    const textFieldOnChangeNumberOf20s = (event) => {
        const newTextFieldValueNumberOf20s = parseInt(event.target.value.length === 0 ? 0 : event.target.value);
        setTextFieldValueNumberOf20s(newTextFieldValueNumberOf20s);
    }

    const textFieldOnChangeNumberOf50s = (event) => {
        const newTextFieldValueNumberOf50s = parseInt(event.target.value.length === 0 ? 0 : event.target.value);
        setTextFieldValueNumberOf50s(newTextFieldValueNumberOf50s);
    }

    const textFieldOnChangeNumberOf100s = (event) => {
        const newTextFieldValueNumberOf100s = parseInt(event.target.value.length === 0 ? 0 : event.target.value);
        setTextFieldValueNumberOf100s(newTextFieldValueNumberOf100s);
    }

    const textFieldOnChangeName = (event) => {
        const newTextFieldValueName = event.target.value;
        setTextFieldValueName(newTextFieldValueName);
    }

    const textFieldOnChangeHours = (event) => {
        const newTextFieldValueHours = event.target.value;
        setTextFieldValueHours(newTextFieldValueHours);
    }

    const buttonOnClickUpdateBills = () => {
        const newBills = {
            '1': textFieldValueNumberOf1s,
            '5': textFieldValueNumberOf5s,
            '10': textFieldValueNumberOf10s,
            '20': textFieldValueNumberOf20s,
            '50': textFieldValueNumberOf50s,
            '100': textFieldValueNumberOf100s
        }
        const newTotalTips = getTotalTips(newBills);

        setBills(newBills);
        setTotalTips(newTotalTips)
        console.log(newBills)
        console.log(getTotalTips(newBills))
    }

    const buttonOnClickAddPerson = () => {
        const name = textFieldValueName;
        const hours = textFieldValueHours;
        const newEmployees = [...employees];
        newEmployees.push({
            name,
            hours
        });
        const newTotalHours = getTotalHours(newEmployees);
        const newTipRate = getTipRate(totalTips, newTotalHours);
        console.log(newTipRate);

        console.log('total hours', getTotalHours(newEmployees))
        
        setTextFieldValueName('');
        setTextFieldValueHours('');
        setEmployees(newEmployees);
        setTotalHours(newTotalHours);
        setTipRate(newTipRate)
        setTotalActualTipValues(getTotalActualTipValues(getEmployeesWithActualTipValues(newEmployees, newTipRate)))
        setTotalRoundedTipValues(getTotalRoundedTipValues(getEmployeesWithRoundedTipValues(newEmployees, newTipRate)))

        console.log(newEmployees)
    }

    return(
        <>
        <div>test</div>
        <GlobalStyle />
            <Grid container>

                {/*BILL INFORMATION FORM*/}
                <Grid item xs={12}>
                    <FormControl>
                        <TextField
                            label="1s"
                            type="number"
                            value={textFieldValueNumberOf1s}
                            onChange={() => textFieldOnChangeNumberOf1s(event)}
                        />
                        <Box mt={2} />
                        <TextField 
                            label="5s"
                            type="number"
                            value={textFieldValueNumberOf5s}
                            onChange={() => textFieldOnChangeNumberOf5s(event)}
                        />
                        <Box mt={3} />
                        <TextField 
                            label="10s"
                            type="number"
                            value={textFieldValueNumberOf10s}
                            onChange={() => textFieldOnChangeNumberOf10s(event)}
                        />
                        <Box mt={3} />
                        <TextField 
                            label="20s"
                            type="number"
                            value={textFieldValueNumberOf20s}
                            onChange={() => textFieldOnChangeNumberOf20s(event)}
                        />
                        <Box mt={3} />
                        <TextField 
                            label="50s"
                            type="number"
                            value={textFieldValueNumberOf50s}
                            onChange={() => textFieldOnChangeNumberOf50s(event)}
                        />
                        <Box mt={3} />
                        <TextField 
                            label="100s"
                            type="number"
                            value={textFieldValueNumberOf100s}
                            onChange={() => textFieldOnChangeNumberOf100s(event)}
                        />
                        <Box mt={3} />
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={buttonOnClickUpdateBills}
                        >
                            Update Bills
                        </Button>
                    </FormControl>
                </Grid>
                

                {/*ADD PERSON FORM*/}
                <Grid item xs={12}>
                    <FormControl>
                            <Box mt={2} />
                            <TextField 
                                label="name"
                                value={textFieldValueName}
                                onChange={() => textFieldOnChangeName(event)}
                            />
                            <Box mt={2} />
                            <TextField 
                                label="hours"
                                type="number"
                                value={textFieldValueHours}
                                onChange={() => textFieldOnChangeHours(event)}
                            />
                            <Box mt={3} />
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={buttonOnClickAddPerson}
                            >
                                Add Person
                            </Button>
                        </FormControl>
                </Grid>


                {/*TIP INFORMATION*/}
                <Grid container item xs={12}><Box mt={8}></Box></Grid>

                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="h6">Total Hours</Typography>
                        <Typography variant="body1">{totalHours}</Typography>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <Typography variant="h6">Total Tips</Typography>
                        <Typography variant="body1">{totalTips}</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="h6">Tip Rate</Typography>
                        <Typography variant="body1">{tipRate}</Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Typography variant="h6">Total Actual Tip Values</Typography>
                        <Typography variant="body1">{totalActualTipValues}</Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Typography variant="h6">Total Rounded Tip Values</Typography>
                        <Typography variant="body1">{totalRoundedTipValues}</Typography>
                    </Grid>
                </Grid>

                {/*EMPLOYEES*/}
                <Grid container item xs={12}><Box mt={8}></Box></Grid>

                <Grid container item xs={12}>
                    <Grid item xs={12}>
                            <Typography variant="h4">EMPLOYEES</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6">NAME</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant="h6">HOURS</Typography>
                    </Grid>
                    {
                        employees.map((employee, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">{employee.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">{employee.hours}</Typography>
                                    </Grid>
                                </React.Fragment>
                        )})
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Application;