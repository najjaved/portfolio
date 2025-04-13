import { Button, Container, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <Container>
      <Title order={2} mb="md">Welcome to Mantine + Next.js 👋</Title>
      <Button color="blue">Click me</Button>
    </Container>
  );
}