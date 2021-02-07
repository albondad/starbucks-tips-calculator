import * as StyledComponents from './styled-components';

export const Button = (props) => {
    return (
        <StyledComponents.Button>{props.label}</StyledComponents.Button>
    )
}