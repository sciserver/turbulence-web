import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

import 'styles/globals.css';
import themeJSON from 'theme.json';
import { ContextWrapper } from 'components/wrappers/Context';

export const hostURL = `${process.env.NEXT_PUBLIC_HOST_BASE_PATH}`;

export default function App({ Component, pageProps }: AppProps) {

  const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  main {
    margin: 10px 5% 30px 20%;
  }

  h2, h3, h4, h5 {
    font-family: "Roboto Slab", serif;
      font-weight: 400;
      font-style: normal;
    font-optical-sizing: auto;
  }
  
  p, blockquote {
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    font-size: 18px;
    color: #666;
  }
  
  .caption {
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    font-size: 12px;
  }

`;

  const theme = createTheme({
    ...themeJSON,
    // disable performance-sucking transitions
    transitions: { create: () => 'none' }
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Slabo+27px&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ContextWrapper>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Component {...pageProps} />
          </StyledThemeProvider>
        </ThemeProvider>
      </ContextWrapper>
    </>
  );
}
