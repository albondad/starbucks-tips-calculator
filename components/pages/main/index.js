import { ST } from 'next/dist/next-server/lib/utils';
import React from 'react'
import * as Shared from '../../shared';
import * as StyledComponents from './styled-components';

export const Main = () => {
    return (
        <StyledComponents.Main>
            <StyledComponents.GlobalStyle />
            <StyledComponents.MainForms>
                <StyledComponents.MainFormsItem>
                        <Shared.Card
                            label='test'
                        >
                        <StyledComponents.MainFormsItemBody>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='test'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='asfasdfsadfsadfasfd'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyButton>
                                <Shared.Button
                                    label='test'
                                />
                            </StyledComponents.MainFormsItemBodyButton>
                            
                    </StyledComponents.MainFormsItemBody>
                        </Shared.Card>
                </StyledComponents.MainFormsItem>

                <StyledComponents.MainFormsItem>
                        <Shared.Card
                            label='test'
                        >
                        <StyledComponents.MainFormsItemBody>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='test'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='asfasdfsadfsadfasfd'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='asfasdfsadfsadfasfd'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='asfasdfsadfsadfasfd'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyButton>
                                <Shared.Button
                                    label='test'
                                />
                            </StyledComponents.MainFormsItemBodyButton>
                            
                    </StyledComponents.MainFormsItemBody>
                        </Shared.Card>
                </StyledComponents.MainFormsItem>
            </StyledComponents.MainForms>

            <StyledComponents.MainStatistics>
                <Shared.Card
                    label="Test"
                >
                    <StyledComponents.MainStatisticsBody>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Hours'
                                value='test'
                            />
                        </StyledComponents.MainStatisticsBodyItem>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Tips'
                                value='test'
                            />
                        </StyledComponents.MainStatisticsBodyItem>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Actual Tip Values'
                                value='test'
                            />
                        </StyledComponents.MainStatisticsBodyItem>
                        <StyledComponents.MainStatisticsBodyItem>
                            <Shared.Statistic
                                label='Total Rounded Tip Values'
                                value='test'
                            />
                        </StyledComponents.MainStatisticsBodyItem>

                    </StyledComponents.MainStatisticsBody>
                </Shared.Card>
            </StyledComponents.MainStatistics>
            <StyledComponents.MainEmployees>
                <Shared.Card
                    label="Test"
                >
                    <Shared.Employees />
                </Shared.Card>
            </StyledComponents.MainEmployees>
        </StyledComponents.Main>
    )
};