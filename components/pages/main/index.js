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
                            label='Add Employees'
                            iconName="personAdd"
                        >
                        <StyledComponents.MainFormsItemBody>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='Name'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='Hours'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyButton>
                                <Shared.Button
                                    label='Add'
                                />
                            </StyledComponents.MainFormsItemBodyButton>
                            
                    </StyledComponents.MainFormsItemBody>
                        </Shared.Card>
                </StyledComponents.MainFormsItem>

                <StyledComponents.MainFormsItem>
                        <Shared.Card
                            label='Update Bill Information'
                            iconName="attachMoney"
                        >
                        <StyledComponents.MainFormsItemBody>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='1s'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='5s'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='10s'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='20s'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='50s'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyInput>
                                <Shared.Input 
                                    label='100s'
                                />
                            </StyledComponents.MainFormsItemBodyInput>
                            <StyledComponents.MainFormsItemBodyButton>
                                <Shared.Button
                                    label='Update'
                                />
                            </StyledComponents.MainFormsItemBodyButton>
                            
                    </StyledComponents.MainFormsItemBody>
                        </Shared.Card>
                </StyledComponents.MainFormsItem>
            </StyledComponents.MainForms>

            <StyledComponents.MainStatistics>
                <Shared.Card
                    label="Statistics"
                    iconName='barChart'
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
                    label="Employees"
                    iconName='groups'
                >
                    <Shared.Employees />
                </Shared.Card>
            </StyledComponents.MainEmployees>
        </StyledComponents.Main>
    )
};