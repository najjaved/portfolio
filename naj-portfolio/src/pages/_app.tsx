//sets up the Mantine theme provider and color scheme toggling
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ primaryColor: 'blue' }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}