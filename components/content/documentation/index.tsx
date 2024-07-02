import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from '../../../context';
import { CardLayout, CardStyled } from '../../common/card';


const Styled = styled.div`
  flex-grow: 1;

  .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }

`;

export const Documentation: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);


  const documentationDirectory: CardLayout[] = [
    {
      title: 'Datasets',
      type: 'Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci sit amet arcu accumsan, non sodales lacus porta. Pellentesque diam libero, luctus a ornare eu, interdum vel ex. Morbi sodales felis ante, cursus venenatis lectus vehicula sed. Donec lacus dui, tincidunt id eros at, lobortis rutrum ipsum. Cras at est vel leo interdum convallis. Curabitur rhoncus lacus magna, nec ultrices enim vestibulum sit amet. Aenean gravida mollis odio at aliquet. Quisque ultricies eros nec metus scelerisque, et congue leo feugiat. Maecenas interdum ligula quis vehicula convallis. Ut at interdum lacus. Donec at leo non nulla aliquet pellentesque et gravida orci. Fusce dapibus egestas orci eu tempus. Nam ut erat tempus, consequat ligula id, pellentesque nisl.',
      onClick: () => { router.push('/documentation/datasets') }
    },
    {
      title: 'Publications',
      type: 'Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci sit amet arcu accumsan, non sodales lacus porta. Pellentesque diam libero, luctus a ornare eu, interdum vel ex. Morbi sodales felis ante, cursus venenatis lectus vehicula sed. Donec lacus dui, tincidunt id eros at, lobortis rutrum ipsum. Cras at est vel leo interdum convallis. Curabitur rhoncus lacus magna, nec ultrices enim vestibulum sit amet. Aenean gravida mollis odio at aliquet. Quisque ultricies eros nec metus scelerisque, et congue leo feugiat. Maecenas interdum ligula quis vehicula convallis. Ut at interdum lacus. Donec at leo non nulla aliquet pellentesque et gravida orci. Fusce dapibus egestas orci eu tempus. Nam ut erat tempus, consequat ligula id, pellentesque nisl.',
      onClick: () => { router.push('/documentation/publications') }
    },
    {
      title: 'Citing',
      type: 'Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci sit amet arcu accumsan, non sodales lacus porta. Pellentesque diam libero, luctus a ornare eu, interdum vel ex. Morbi sodales felis ante, cursus venenatis lectus vehicula sed. Donec lacus dui, tincidunt id eros at, lobortis rutrum ipsum. Cras at est vel leo interdum convallis. Curabitur rhoncus lacus magna, nec ultrices enim vestibulum sit amet. Aenean gravida mollis odio at aliquet. Quisque ultricies eros nec metus scelerisque, et congue leo feugiat. Maecenas interdum ligula quis vehicula convallis. Ut at interdum lacus. Donec at leo non nulla aliquet pellentesque et gravida orci. Fusce dapibus egestas orci eu tempus. Nam ut erat tempus, consequat ligula id, pellentesque nisl.',
      onClick: () => { router.push('/documentation/citing') }
    },
    {
      title: 'Analysis Tool',
      type: 'Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci sit amet arcu accumsan, non sodales lacus porta. Pellentesque diam libero, luctus a ornare eu, interdum vel ex. Morbi sodales felis ante, cursus venenatis lectus vehicula sed. Donec lacus dui, tincidunt id eros at, lobortis rutrum ipsum. Cras at est vel leo interdum convallis. Curabitur rhoncus lacus magna, nec ultrices enim vestibulum sit amet. Aenean gravida mollis odio at aliquet. Quisque ultricies eros nec metus scelerisque, et congue leo feugiat. Maecenas interdum ligula quis vehicula convallis. Ut at interdum lacus. Donec at leo non nulla aliquet pellentesque et gravida orci. Fusce dapibus egestas orci eu tempus. Nam ut erat tempus, consequat ligula id, pellentesque nisl.',
      onClick: () => { router.push('/documentation/analysisTool') }
    },
    {
      title: 'Tutorials',
      type: 'Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci sit amet arcu accumsan, non sodales lacus porta. Pellentesque diam libero, luctus a ornare eu, interdum vel ex. Morbi sodales felis ante, cursus venenatis lectus vehicula sed. Donec lacus dui, tincidunt id eros at, lobortis rutrum ipsum. Cras at est vel leo interdum convallis. Curabitur rhoncus lacus magna, nec ultrices enim vestibulum sit amet. Aenean gravida mollis odio at aliquet. Quisque ultricies eros nec metus scelerisque, et congue leo feugiat. Maecenas interdum ligula quis vehicula convallis. Ut at interdum lacus. Donec at leo non nulla aliquet pellentesque et gravida orci. Fusce dapibus egestas orci eu tempus. Nam ut erat tempus, consequat ligula id, pellentesque nisl.',
      onClick: () => { router.push('/database/tutorials') }
    }
  ];

  return (
    <Styled>
      <h1>Documentation</h1>
      <br />
      <Grid container alignItems="stretch">
        {documentationDirectory.map(i =>
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