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
      title: 'Web Browser',
      type: 'External link',
      description: 'You will be able to query the JHTDB directly from this resource on our website.',
      onClick: () => { router.replace('https://turbulence.pha.jhu.edu/webquery/query.aspx') }
    },
    {
      title: 'Web services interface',
      type: 'Guide',
      description: 'Accessing JHTDB is made possible through the use of Web Services. \
                    We provide instructions and example code that support various popular programming languages.',
      onClick: () => { router.push('/database/webServices') }
    },
    {
      title: 'Download Data Cutout',
      type: 'External link',
      description: 'The cutout service is hosted on SciServer, a cloud-based data-driven cluster by IDIES. \
                    It offers reliable and fast data access and generates output in HDF5 format and an XDMF file \
                    for visualization in Paraview. Users must create a SciServer account to use the service.',
      onClick: () => { router.replace('http://turbulence.idies.jhu.edu/cutout/') }
    },
    {
      title: 'Matlab Analysis Tools',
      type: 'Guide',
      description: 'Turbmat-Tools is a Matlab package containing six pre-written scripts that utilize the Turbmat package to retrieve, \
                    process, and display data from the JHTDB Cluster. The Turbot package serves as a wrapper for \
                    Matlab web service functions used to access the JHTDB Cluster.',
      onClick: () => { router.push('/database/matlabAnalysisTools') }
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