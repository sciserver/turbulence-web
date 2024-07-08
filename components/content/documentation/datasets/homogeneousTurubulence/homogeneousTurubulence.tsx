import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from '../../../../../context';
import { CardLayout, CardStyled } from '../../../../common/card';
import { BreadCrumbParent, BreadCrumbsStyled } from '../../../../common/breadcrumbs';
import { hostURL } from '../../../../../pages/_app';

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
    setTabOption('documentation');
  }, []);

  const datasetsList: CardLayout[] = [
    {
      title: 'Isotropic Turbulence on <i>1,024</i><sup>3</sup> mesh',
      subtitle: 'isotropic1024coarse',
      description: 'Direct numerical simulation (DNS) for which full time evolution is available, over 5 large-scale turnover times.',
      onClick: () => { router.push('/documentation/datasets/homogeneousTurbulence/isotropic') },
      mediaSource: `${hostURL}datasets/iso1024-large.png`
    },
    {
      title: 'Forced MHD Turbulence on <i>1,024</i><sup>3</sup> mesh',
      subtitle: 'mhd1024',
      description: 'DNS for which full time evolution is available, over about one large-scale turnover time.',
      onClick: () => { router.push('/documentation/datasets/homogeneousTurbulence/mhd') },
      mediaSource: `${hostURL}datasets/mhd-small.jpg`
    },
    {
      title: 'Homogeneous Buoyancy Driven Turbulence on <i>1,024</i><sup>3</sup> mesh ',
      subtitle: 'mixing',
      description: 'DNS covering both the buoyancy driven increase in turbulence intensity as well as the buoyancy mediated turbulence decay.',
      onClick: () => { router.push('/documentation/datasets/homogeneousTurbulence/hbdt') },
      mediaSource: `${hostURL}datasets/rstrt_0285_density.png`
    },
    {
      title: 'Isotropic Turbulence on <i>4,096</i><sup>3</sup> mesh',
      subtitle: 'isotropic4096',
      description: 'DNS for which 1 timestep snapshot is available.',
      onClick: () => { router.push('/documentation/datasets/homogeneousTurbulence/isotropic4096') },
      mediaSource: `${hostURL}datasets/isotropic4096.jpg`
    },
    {
      title: 'Isotropic Turbulence on <i>8,192</i><sup>3</sup> mesh',
      subtitle: 'isotropic8192',
      description: 'DNS for which a total of 6 timestep snapshots are available: 5 at high Reynolds number and 1 at lower Reynolds number but with very high spatial resolution.',
      onClick: () => { router.push('/documentation/datasets/homogeneousTurbulence/isotropic8192') },
      mediaSource: `${hostURL}datasets/isotropic8192-small.jpg`
    }
  ];

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Datasets', url: '/documentation/datasets' }
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