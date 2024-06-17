import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import mainImage from '../../../public/fig4-1.jpg';

const Styled = styled.div`
  display: flex;

`;

export const AnalysisTool: FC = () => {

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