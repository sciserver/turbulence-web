import type { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import { createTheme, ThemeProvider } from '@mui/material';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import client from "../apollo-client";
import themeJSON from '../theme.json';
import '../styles/globals.css';
import Head from 'next/head';

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
    margin: 30px 50px;
  }

  h2, h3 {
    font-family: "Noto Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
  
  p {
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Component {...pageProps} />
          </StyledThemeProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
