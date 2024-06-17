import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import mainImage from '../../../public/fig4-1.jpg';

const Styled = styled.div`
  display: flex;

`;

export const WebServices: FC = () => {

  return (
    <Styled>
      <div>
        <h2>Instructions to access via Web services interface</h2>
        <h3>Overview</h3>
        <p>
          This website is a portal to an Open Numerical Turbulence Laboratory that
          enables access to multi-Terabyte turbulence databases. The data reside on
          several nodes and disks on our database cluster computers and are stored
          in small 3D subcubes. Positions are indexed using a Z-curve for efficient access.
        </p>
      </div>
      <div>
        <Image src={mainImage} width={200} height={200} alt="Turbulence figure 1" />
      </div>
    </Styled>
  );
};