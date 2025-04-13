import { useMantineColorScheme, Button, Container, Flex, Title, Text } from '@mantine/core';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        style={{
          backgroundColor: isDark ? '#333' : '#fff',
          padding: '10px 20px',
        }}
      >
        <Title order={3} style={{ color: isDark ? '#fff' : '#000' }}>
          My Portfolio
        </Title>
        <Flex>
          <Link href="/" passHref>
            <Button variant="subtle" style={{ color: isDark ? '#fff' : '#000' }}>
              Home
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button variant="subtle" style={{ color: isDark ? '#fff' : '#000' }}>
              About
            </Button>
          </Link>
          <Button
            onClick={() => toggleColorScheme()}
            variant="outline"
            style={{ color: isDark ? '#fff' : '#000' }}
          >
            Switch to {isDark ? 'light' : 'dark'} mode
          </Button>
        </Flex>
      </Flex>

      <main>
        <Container style={{ paddingTop: '2rem' }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
