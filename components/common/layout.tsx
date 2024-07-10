import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Alert } from '@mui/material';

import { Footer } from './footer';
import { Banner } from './banner';
import { TabMenu } from './tabs';

interface Props {
  children: any
}

export type TabOption = {
  name: string
  value: string
}

const Styled = styled.div`
  a {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Styled>
      <Banner />
      <TabMenu />
      <Alert severity="success">
        <strong>NOTICE:</strong> June-26th-2024: All services are functioning normally. For past announcements, please <Link href="https://turbulence.pha.jhu.edu/announcements.aspx">click here</Link>
      </Alert>
      <main>{children}</main>
      <Footer />
    </Styled>
  )
}