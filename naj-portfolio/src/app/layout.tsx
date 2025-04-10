import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export const metadata = {
  title: 'Najma Javed | Portfolio',
  description: 'HiL Engineer, Web Developer, DevOps and Cloud Computing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto" withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
