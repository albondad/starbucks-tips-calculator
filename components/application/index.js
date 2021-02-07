import React from 'react'
import { Button, Input, Card, Icon, Statistic, Employees } from '../shared';
import * as StyledComponents from './styled-components';

const Application = () => {
    return (
        <React.Fragment>
            <StyledComponents.GlobalStyle />
            <Button />
            <Input />
            <Card
                label='test'
                icon={<Icon name="personAdd" />}
            >
                test
            </Card>
            <Statistic 
                label='test'
                value='asdfasdf'
            />
            <Employees>
                
            </Employees>
        </React.Fragment>
    )
}

export default Application;