import { FC } from 'react';
import { Banner } from './banner';
import { TabMenu } from './tabs';
import styled from 'styled-components';
import { Footer } from './footer';
import { Alert } from '@mui/material';
import Link from 'next/link';

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