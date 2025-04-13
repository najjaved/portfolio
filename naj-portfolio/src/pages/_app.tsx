// pages/_app.tsx
import { AppProps } from 'next/app';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css'; // Ensure global styles are loaded
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
