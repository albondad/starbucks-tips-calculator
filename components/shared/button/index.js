import * as StyledComponents from './styled-components';

export const Button = (props) => {
    return (
        <StyledComponents.Button onClick={props.onClick}>{props.label}</StyledComponents.Button>
    )
}