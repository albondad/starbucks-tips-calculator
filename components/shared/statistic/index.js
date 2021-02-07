import * as StyledComponents from './styled-components';

export const Statistic = (props) => {
    return (
        <StyledComponents.Statistic>
            <StyledComponents.StatisticLabel>{props.label}</StyledComponents.StatisticLabel>
            <StyledComponents.StatisticValue>{props.value}</StyledComponents.StatisticValue>
        </StyledComponents.Statistic>
    )
}