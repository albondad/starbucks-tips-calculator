import * as StyledComponents from './styled-components';

export const Card = (props) => {
    return (
        <StyledComponents.Card> 
            <StyledComponents.CardHeader>
                <StyledComponents.CardHeaderLabel>{props.label}</StyledComponents.CardHeaderLabel> 
                <StyledComponents.CardHeaderIcon>{props.icon}</StyledComponents.CardHeaderIcon> 
            </StyledComponents.CardHeader> 
            <StyledComponents.CardBody> 
                {props.children}
            </StyledComponents.CardBody>
        </StyledComponents.Card>
    )
}