import { ST } from 'next/dist/next-server/lib/utils';
import * as StyledComponents from './styled-components';

export const Input = (props) => {

    return (
        <StyledComponents.Input>
            <StyledComponents.InputLabel>{props.label}</StyledComponents.InputLabel>
            <StyledComponents.InputArea
                value={props.value}
                onChange={props.onChange}
            />
        </StyledComponents.Input>
    )
}

Input.defaultProps = {
    onChange: () => {}
}