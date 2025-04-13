import { AppProps } from 'next/app';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import { useLocalStorage } from '@mantine/hooks';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<'light' | 'dark'>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () =>
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider defaultColorScheme={colorScheme}>
        <Layout>
          <Component {...pageProps} toggleColorScheme={toggleColorScheme} />
        </Layout>
      </MantineProvider>
    </>
  );
}
