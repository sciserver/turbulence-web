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
      <Alert severity="error">
        June-13th-2024. Currently filedb datasets - channeldb5200, rotstrat4096, transition_bl are not available due to
        a hardware related failure. Our IT team is working on fixing the issue. We will update this message once this
        is resolved. For past announcements, please <Link href="https://turbulence.pha.jhu.edu/announcements.aspx">click here</Link>
      </Alert>
      <main>{children}</main>
      <Footer />
    </Styled>
  )
}