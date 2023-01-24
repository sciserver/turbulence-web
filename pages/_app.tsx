import type { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import { createTheme, ThemeProvider } from '@mui/material';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import client from "../apollo-client";
import themeJSON from '../theme.json';
import '../styles/globals.css';
import { AuthWrapper } from '../components/wrappers/Auth';

export default function App({ Component, pageProps }: AppProps) {

  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
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
    margin-left: 350px;
  }
`;

  const theme = createTheme({
    ...themeJSON,
    // disable performance-sucking transitions
    transitions: { create: () => 'none' }
  });

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <AuthWrapper>
              <Component {...pageProps} />
            </AuthWrapper>
          </StyledThemeProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
