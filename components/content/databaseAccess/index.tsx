import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../context';


const Styled = styled.div`
  display: flex;

`;

export const DatabaseAccess: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('database');
  }, []);

  return (
    <Styled>
      <h2>Database Access</h2>
    </Styled>
  );
};