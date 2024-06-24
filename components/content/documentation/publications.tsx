import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../context';

const Styled = styled.div`

`;

export const Publications: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  return (
    <Styled>
      <h2>Publications and abstracts</h2>
    </Styled>
  );
};