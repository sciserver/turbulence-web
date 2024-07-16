import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from 'context';
import { CardLayout, CardStyled } from 'components/common/card';
import { hostURL } from 'pages/_app';


const Styled = styled.div`
  flex-grow: 1;

  .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }

`;

export const Visualizations: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);


  const visualizationsDirectory: CardLayout[] = [
    {
      title: 'Vorticies within vorticies',
      description: 'Visualization of time evolution of small scale vortices being stretched and twisted by \
       larger-scale vortices.',
      onClick: () => { router.push('/visualizations/vortex') },
      mediaSource: `${hostURL}visualizations/vortex1.png`
    },
    {
      title: 'Swept through turbulence',
      description: 'Velocity and vorticity contours in the 1024<sup>3</sup> isotropic turbulence DNS dataset on a 2D plane being swept across the domain at a fixed time.',
      onClick: () => { router.push('/visualizations/sweptThrough') },
      mediaSource: `${hostURL}visualizations/isotropic2.png`
    },
    {
      title: 'Electric field in MHD turbulence',
      description: 'Ohmic electric field in 3D MHD turbulence.',
      onClick: () => { router.push('/visualizations/mhd3') },
      mediaSource: `${hostURL}visualizations/mhd3.png`
    },
    {
      title: 'Wrinkling of smoke sheets in turbulence',
      description: 'Material surface deformations in a snapshot of isotropic turbulence.',
      onClick: () => { router.push('/visualizations/smoke') },
      mediaSource: `${hostURL}visualizations/smoke4.png`
    }
  ];

  return (
    <Styled>
      <h1>Visualizations</h1>
      <br />
      <Grid container alignItems="stretch">
        {visualizationsDirectory.map(i =>
          <Grid key={i.title} item className="card-list">
            <CardStyled
              title={i.title}
              description={i.description}
              onClick={i.onClick}
              mediaSource={i.mediaSource}
            />
          </Grid>
        )}
      </Grid>
    </Styled>
  );
};