import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from 'context';
import { PointsQueried } from 'components/content/pointsQueried';
import { CardLayout, CardStyled } from 'components/common/card';


const Styled = styled.div`
  .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;

  }
  
  .token-description {
    width: 90%;
  }

  a {
    word-break: break-all;
  }

  iframe {
    border: none;
    width: auto;
    height: 145px; 
    width: 100%; 

    .code {
      width: 4.5em; 
      height: 1.45em; 
      border 0; 
      transform: scale(1); 
      overflow: hidden;
    }
  }

`;
export const DatabaseAccess: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);


  const dbAccesssDirectory: CardLayout[] = [
    {
      title: 'Web browser pointwise',
      type: 'External link',
      description: 'Directly obtain data using single-point virtual sensor method.',
      onClick: () => {
        window.open('https://turbulence.pha.jhu.edu/webquery/query.aspx', '_blank', 'noopener,noreferrer');
      }
    },
    {
      title: 'Matlab™ Local',
      type: 'Guide',
      description: 'Matlab™ code including demo to be executed on user\'s remote computer to access arrays of data using \
                    virtual sensor array method.',
      onClick: () => {
        router.push('/database/local/matlab');
      }
    },
    {
      title: 'Python Local',
      type: 'Guide',
      description: 'Python code (jupyter notebook) including demo to be executed on user\'s remote computer to access \
      arrays of data using virtual sensor array method.',
      onClick: () => {
        router.push('/database/local/python');
      }
    },
    {
      title: 'Python Sciserver',
      type: 'Guide',
      description: 'Python code (jupyter notebook) including demo to be executed on user\'s Sciserver environment to access \
      arrays of data using virtual sensor array method. Users must create a SciServer account to use this service.',
      onClick: () => {
        router.push('/database/pythonSciserver');
      }
    },
    {
      title: 'Cutout Service',
      type: 'External link',
      description: 'Submit requests for gridded raw data. The service generates output in HDF5 format and an XDMF file for \
                     (e.g.) visualization in Paraview. Users must create a SciServer account to use this service.',
      onClick: () => {
        router.push('/database/cutout');
      }
    }
  ];

  return (
    <Styled>
      <PointsQueried />
      <h2>Authorization Token for the Johns Hopkins Turbulence Databases</h2>
      <p className="token-description">
        For requests of less than 4096 points, the following testing identifier can be used.
        <br />
        <iframe
          title="Code snippet for authorization token"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=a11y-dark&wt=bw&l=text&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=24px&ph=22px&ln=false&fl=1&fm=IBM+Plex+Mono&fs=15.5px&lh=133%25&si=false&es=2x&wm=false&code=edu.jhu.pha.turbulence.testing-201406"
          className="code"
          sandbox="allow-scripts allow-same-origin">
        </iframe>
        <br />
        For larger queries, users need to have an  <strong><i>authorization token</i></strong>. Please send an e-mail to <Link href="mailto:turbulence@lists.johnshopkins.edu">turbulence@lists.johnshopkins.edu</Link> including your name, email address, and institutional affiliation and department, together with a short description of your intended use of the database.
      </p>
      <br />
      <h2>Database Access</h2>
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
