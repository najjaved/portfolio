// colorScheme is managed by state (using useLocalStorage), and no longer passed directly into the MantineProvider prop
import { Button, Container, Title, useMantineColorScheme } from '@mantine/core';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  console.log('Current color scheme:', colorScheme); // log "light" or "dark"

  return (
    <div
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'lime' : 'blue',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        padding: '2rem',
      }}
    >
      <Container>
        <Title mb="md">Mantine Theme Toggle Test</Title>
        <Button onClick={toggleColorScheme}>
          Switch to {isDark ? 'light' : 'dark'} mode
        </Button>
      </Container>
    </div>
  );
}
