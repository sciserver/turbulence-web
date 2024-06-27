import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from '../../../context';
import { CardLayout, CardStyled } from '../../common/card';


const Styled = styled.div`
  .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }

`;

export const DatabaseAccess: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('database');
  }, []);


  const dbAccesssDirectory: CardLayout[] = [
    {
      title: 'Web browser pointwise',
      type: 'External link',
      description: 'Directly obtain data using single-point virtual sensor method.',
      onClick: () => { router.replace('https://turbulence.pha.jhu.edu/webquery/query.aspx') }
    },
    {
      title: 'Matlab Local',
      type: 'Guide',
      description: 'Matlab code including demo to be executed on user\'s remote computer to access arrays of data using \
                    virtual sensor array method.',
      onClick: () => { router.push('/database/webServices') }
    },
    {
      title: 'Python Local',
      type: 'Guide',
      description: 'Python code (jupyter notebook) including demo to be executed on user\'s remote computer to access \
      arrays of data using virtual sensor array method.',
      onClick: () => { router.push('/database/webServices') }
    },
    {
      title: 'Python Sciserver',
      type: 'Guide',
      description: 'Python code (jupyter notebook) including demo to be executed on user\'s Sciserver environment to access \
      arrays of data using virtual sensor array method. Users must create a SciServer account to use this service.',
      onClick: () => { router.push('/database/webServices') }
    },
    {
      title: 'Cutout Service',
      type: 'External link',
      description: 'Submit requests for gridded raw data. The service generates output in HDF5 format and an XDMF file for \
                     (e.g.) visualization in Paraview. Users must create a SciServer account to use this service.',
      onClick: () => { router.replace('http://turbulence.idies.jhu.edu/cutout/') }
    }
  ];

  return (
    <Styled>
      <h1>Database Access</h1>
      <br />
      <Grid container alignItems="stretch">
        {dbAccesssDirectory.map(i =>
          <Grid key={i.title} item className="card-list">
            <CardStyled
              title={i.title}
              type={i.type}
              description={i.description}
              onClick={i.onClick}
            />
          </Grid>
        )}
      </Grid>
    </Styled>
  );
};