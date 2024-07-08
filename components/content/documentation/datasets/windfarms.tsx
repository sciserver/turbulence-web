import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../../context';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { CardLayout, CardStyled } from '../../../common/card';
import { BreadCrumbParent, BreadCrumbsStyled } from '../../../common/breadcrumbs';

const Styled = styled.div`
    .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }
`;

export const Windfarms: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  const datasetsList: CardLayout[] = [
    {
      title: 'LES of large wind farm under conventionally neutral atmospheric conditions ',
      subtitle: 'Coming soon',
      onClick: () => { },
    },
    {
      title: 'LES of large wind farm during a diurnal cycle',
      subtitle: 'Coming soon',
      onClick: () => { },
    }
  ];

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Datasets', url: '/documentation/datasets' }
  ]

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Windfarms" />
      <h2>Windfarms</h2>
      <Grid container alignItems="stretch">
        {datasetsList.map(i =>
          <Grid key={i.title} item className="card-list">
            <CardStyled
              title={i.title}
              subtitle={i.subtitle}
              onClick={i.onClick}
            />
          </Grid>
        )}
      </Grid>
    </Styled>
  );
};