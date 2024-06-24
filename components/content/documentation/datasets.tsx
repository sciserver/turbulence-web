import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../context';

const Styled = styled.div`

`;

export const Datasets: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  return (
    <Styled>
      <h2>Dataset descriptions (9 datasets)</h2>
    </Styled>
  );
};