import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from 'context';
import { hostURL } from 'pages/_app';
import { CardLayout, CardStyled } from 'components/common/card';

const Styled = styled.div`
    .card-list {
    display: flex;  
    flex-wrap: no-wrap;

    margin-top: 20px;
  }
`;

export const Datasets: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const datasetsList: CardLayout[] = [
    {
      title: 'Homogeneous Turbulence',
      subtitle: 'Direct  Numerical Simulations',
      onClick: () => {
        router.push('/datasets/homogeneousTurbulence');
      },
      mediaSource: `${hostURL}datasets/homogeneousTurbulence.png`

    },
    {
      title: 'Wall Bounded Turbulence ',
      subtitle: 'Direct  Numerical Simulations',
      onClick: () => {
        router.push('/datasets/wallBoundedTurbulence');
      },
      mediaSource: `${hostURL}datasets/wallBoundedTurbulence.png`

    },
    {
      title: 'Geophysical Turbulence ',
      subtitle: 'DNS and Large Eddy Simulations',
      onClick: () => {
        router.push('/datasets/geophysicalTurbulence');
      },
      mediaSource: `${hostURL}datasets/geophysicalTurbulence.png`

    },
    {
      title: 'Windfarms (coming soon)',
      subtitle: 'Large Eddy Simulations',
      onClick: () => {
        router.push('/datasets/windfarms');
      }
    }
  ];

  return (
    <Styled>
      <h2>Datasets</h2>
      <Grid container alignItems="stretch">
        {datasetsList.map(i =>
          <Grid key={i.title} item className="card-list">
            <CardStyled
              title={i.title}
              onClick={i.onClick}
              mediaSource={i.mediaSource}
              subtitle={i.subtitle}
            />
          </Grid>
        )}
      </Grid>
    </Styled>
  );
};