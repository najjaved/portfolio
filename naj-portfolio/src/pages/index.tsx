// pages/index.tsx
import { Container, Title, Text, useMantineColorScheme } from '@mantine/core';

export default function Home() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

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
        <Title mb="md">Welcome to My Portfolio</Title>
        <Text>This is the home page.</Text>
      </Container>
    </div>
  );
}
