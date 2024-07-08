import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

import { AppContext } from '../../../../../context';
import { CardLayout, CardStyled } from '../../../../common/card';
import { hostURL } from '../../../../../pages/_app';
import { BreadCrumbParent, BreadCrumbsStyled } from '../../../../common/breadcrumbs';

const Styled = styled.div`
    .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }
`;

export const GeophysicalTurbulence: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  const datasetsList: CardLayout[] = [
    {
      title: 'Rotating Stratified Turbulence on <i>4,094</i><sup>3</sup> mesh',
      subtitle: 'rotstrat4096',
      description: 'Direct numerical simulation (DNS) of rotating stratified homogeneous turbulence, for which total of 5 snapshots are available.',
      onClick: () => { router.push('/documentation/datasets/geophysicalTurbulence/rst') },
      mediaSource: `${hostURL}datasets/rotstrat4096.jpg`
    },
    {
      title: 'Stably stratified atmospheric boundary layer',
      subtitle: '(COMING SOON)',
      description: 'Large Eddy Simulation (LES) of stably stratified ABL flow on on <i>2,048</i><sup>3</sup> mesh. A time history of 100 time-steps \
                    (“sabl2048high”) and 20 statistically independent snapshots (“sable2048low”) are available.',
      onClick: () => { router.push('/documentation/datasets/geophysicalTurbulence/sabl') },
      mediaSource: `${hostURL}datasets/boundaryLayer.png`
    }
  ];

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Datasets', url: '/documentation/datasets' }
  ];

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Geophysical Turbulence" />
      <h2>Geophysical Turbulence</h2>
      <Grid container alignItems="stretch">
        {datasetsList.map(i =>
          <Grid key={i.title} item className="card-list">
            <CardStyled
              title={i.title}
              subtitle={i.subtitle}
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