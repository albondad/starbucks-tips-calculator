import { ST } from 'next/dist/next-server/lib/utils';
import * as StyledComponents from './styled-components';

export const Input = (props) => {
    return (
        <StyledComponents.Input>
            <StyledComponents.InputLabel>name</StyledComponents.InputLabel>
            <StyledComponents.InputArea />
        </StyledComponents.Input>
    )
}