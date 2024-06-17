import { FC, useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';

const StyledTabs = styled(Tabs)`
  margin-top: -10px;
  background-color: black;
`;

const StyledTab = styled(Tab)`
  text-transform: none;
  color: white;
`;

export const TabMenu: FC = () => {

  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  }

  return (
    <StyledTabs value={tabValue} onChange={handleTabChange} centered color='secondary'>
      <StyledTab label="Home" />
      <StyledTab label="Database Access" />
      <StyledTab label="Documentation" />
      <StyledTab label="Links" />
      <StyledTab label="Visualizations" />
      <StyledTab label="About" />
    </StyledTabs>
  );
};