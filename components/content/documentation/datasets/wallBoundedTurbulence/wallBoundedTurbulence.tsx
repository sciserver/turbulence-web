import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

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

export const WallBoundedTurbulence: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const datasetsList: CardLayout[] = [
    {
      title: 'Channel Flow at <i>Re</i><sub>τ</sub><i>=1000</i>',
      subtitle: 'channel',
      description: 'Direct numerical simulation (DNS) of channel flow turbulence in a domain of size <i>8π × 2 × 3π</i>, \
                    using <i>2048 × 512 × 1536</i> nodes. The full time evolution is available, over a flow-through time \
                    across across the <i>8π</i> channel',
      onClick: () => { router.push('/datasets/wallBoundedTurbulence/channelFlow') },
      mediaSource: `${hostURL}datasets/channel-large-banner.jpeg`
    },
    {
      title: 'Channel Flow at <i>Re</i><sub>τ</sub><i>=5,200</i>',
      subtitle: 'channel5200',
      description: 'DNS of channel flow turbulence in a domain of size <i>8π × 2 × 3π</i>, using <i>10240 × 1536 × 7680</i> \
                    nodes. A total of 11 snapshots are available.',
      onClick: () => { router.push('/datasets/wallBoundedTurbulence/channel5200') },
      mediaSource: `${hostURL}datasets/channel5200-banner.png`
    },
    {
      title: 'Transitional Boundary Layer from <i>Re</i><sub>θ</sub><i>=105.5</i>  to 1502.0',
      subtitle: 'transition_bl',
      description: 'DNS of a transitional boundary layer using <i>3320 × 224 × 2048</i> grid points. \The full time evolution \
                    is available, over about 1 flow-through time across the length of simulation domain.',
      onClick: () => { router.push('/datasets/wallBoundedTurbulence/transitionalBL') },
      mediaSource: `${hostURL}datasets/transition_bl.png`
    }
  ];

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Datasets', url: '/datasets' }
  ]

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Wall Bounded Turbulence" />
      <h2>Wall Bounded Turbulence</h2>
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