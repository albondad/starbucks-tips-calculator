import React from 'react'
import { Button } from '../shared';
import * as StyledComponents from './styled-components';

const Application = () => {
    return (
        <React.Fragment>
            <StyledComponents.GlobalStyle />
            <Button />
        </React.Fragment>
    )
}

export default Application;