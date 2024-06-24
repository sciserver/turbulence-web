import { FC, useContext } from 'react';
import router from 'next/router';
import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';

import { TabOption } from './layout';
import { AppContext } from '../../context';

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
    console.log(newValue);

    router.push(`/${newValue}`);
  }

  const tabOptions: TabOption[] = [
    { name: 'Home', value: 'home' },
    { name: 'Database Access', value: 'database' },
    { name: 'Documentation', value: 'documentation' },
    { name: 'Links', value: 'links' },
    { name: 'Visualizations', value: 'visualizations' },
    { name: 'About', value: 'about' }
  ];

  return (
    <StyledTabs value={tabOption} onChange={handleTabChange} centered color="secondary">
      {tabOptions.map(tab =>
        <StyledTab label={tab.name} value={tab.value} />
      )}
    </StyledTabs>
  );
};