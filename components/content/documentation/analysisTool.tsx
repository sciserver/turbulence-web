import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import mainImage from 'public/JHTDB2_snapshots.png';

const Styled = styled.div`
  display: flex;

`;

export const AnalysisTool: FC = () => {

  const router = useRouter();
  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
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