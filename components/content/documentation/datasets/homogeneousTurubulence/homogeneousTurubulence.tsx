import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from 'context';
import { hostURL } from 'pages/_app';
import { CardLayout, CardStyled } from 'components/common/card';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

const Styled = styled.div`
    .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }
`;

export const HomogeneousTurbulence: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const datasetsList: CardLayout[] = [
    {
      title: 'Isotropic Turbulence on 1,024<sup>3</sup> mesh',
      subtitle: 'isotropic1024coarse',
      description: 'Direct numerical simulation (DNS) for which full time evolution is available, over 5 large-scale turnover times.',
      onClick: () => { router.push('/datasets/homogeneousTurbulence/isotropic') },
      mediaSource: `${hostURL}datasets/iso1024-large.png`
    },
    {
      title: 'Forced MHD Turbulence on 1,024<sup>3</sup> mesh',
      subtitle: 'mhd1024',
      description: 'DNS for which full time evolution is available, over about one large-scale turnover time.',
      onClick: () => { router.push('/datasets/homogeneousTurbulence/mhd') },
      mediaSource: `${hostURL}datasets/mhd-small.jpg`
    },
    {
      title: 'Homogeneous Buoyancy Driven Turbulence on 1,024<sup>3</sup> mesh ',
      subtitle: 'mixing',
      description: 'DNS covering both the buoyancy driven increase in turbulence intensity as well as the buoyancy mediated turbulence decay.',
      onClick: () => { router.push('/datasets/homogeneousTurbulence/hbdt') },
      mediaSource: `${hostURL}datasets/rstrt_0285_density.png`
    },
    {
      title: 'Isotropic Turbulence on 4,096<sup>3</sup> mesh',
      subtitle: 'isotropic4096',
      description: 'DNS for which 1 timestep snapshot is available.',
      onClick: () => { router.push('/datasets/homogeneousTurbulence/isotropic4096') },
      mediaSource: `${hostURL}datasets/isotropic4096.jpg`
    },
    {
      title: 'Isotropic Turbulence on 8,192<sup>3</sup> mesh',
      subtitle: 'isotropic8192',
      description: 'DNS for which a total of 6 timestep snapshots are available: 5 at high Reynolds number and 1 at lower Reynolds number but with very high spatial resolution.',
      onClick: () => { router.push('/datasets/homogeneousTurbulence/isotropic8192') },
      mediaSource: `${hostURL}datasets/isotropic8192-small.jpg`
    }
  ];

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Datasets', url: '/datasets' }
  ]

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Homogeneous Turbulence" />
      <h2>Homogeneous Turbulence</h2>
      <Grid container alignItems="stretch">
        {datasetsList.map(i =>
          <Grid key={i.title} item className="card-list">
            <CardStyled
              title={i.title}
              onClick={i.onClick}
              mediaSource={i.mediaSource}
              subtitle={i.subtitle}
              description={i.description}
            />
          </Grid>
        )}
      </Grid>
    </Styled>
  );
};