import * as Shared from '..'
import * as StyledComponents from './styled-components';

export const Card = (props) => {
    return (
        <StyledComponents.Card> 
            <StyledComponents.CardHeader>
                <StyledComponents.CardHeaderLabel>{props.label}</StyledComponents.CardHeaderLabel> 
                <StyledComponents.CardHeaderIcon>
                    <Shared.Icon
                        name={props.iconName}
                        color="#000000"
                        size='32px'
                    />
                </StyledComponents.CardHeaderIcon> 
            </StyledComponents.CardHeader> 
            <StyledComponents.CardBody> 
                {props.children}
            </StyledComponents.CardBody>
        </StyledComponents.Card>
    )
}