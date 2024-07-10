import { FC, useContext } from 'react';
import router from 'next/router';
import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';

import { AppContext } from 'context';
import { TabOption } from './layout';

const StyledTabs = styled(Tabs)`
  margin-top: -10px;
  background-color: black;
`;

const StyledTab = styled(Tab)`
  text-transform: none;
  color: white;
`;

export const TabMenu: FC = () => {

  const { tabOption, setTabOption } = useContext(AppContext);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabOption(newValue);
    router.push(`/${newValue}`);
  }

  const handleSameOptionClick = () => {
    router.push(`/${tabOption}`);
  }

  const tabOptions: TabOption[] = [
    { name: 'Home', value: 'home' },
    { name: 'Database Access', value: 'database' },
    { name: 'Datasets', value: 'datasets' },
    { name: 'Citing', value: 'citing' },
    { name: 'Publications', value: 'publications' },
    { name: 'Visualizations', value: 'visualizations' }
  ];

  return (
    <StyledTabs value={tabOption} onChange={handleTabChange} centered color="secondary">
      {tabOptions.map(tab =>
        <StyledTab key={tab.name} label={tab.name} value={tab.value} onClick={tabOption === tab.value ? handleSameOptionClick : () => { }} />
      )}
    </StyledTabs>
  );
};