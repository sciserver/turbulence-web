import Image from 'next/image';
import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';

import mainImage from '../../../public/JHTDB2_snapshots.png';
import { AppContext } from '../../../context';

const Styled = styled.div`
  display: flex;

`;

export const AnalysisTool: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  return (
    <Styled>
      <div>
        <h2>Database Functions</h2>
      </div>
      <div>
        <Image src={mainImage} width={200} height={200} alt="Turbulence figure 1" />
      </div>
    </Styled>
  );
};