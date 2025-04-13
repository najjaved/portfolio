import { Container, Title, Text, Paper, Grid, Badge, Divider, Space, Button, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { IconFlask, IconCode, IconBusinessplan, IconUser } from '@tabler/icons-react';

export default function AboutPage() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme(); // Access color scheme

  return (
    <div
      style={{
        backgroundImage: `url('https://your-image-url.com/your-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '80px', // Adjust the padding based on your navbar height
        color: colorScheme === 'dark' ? 'white' : 'black',
      }}
    >
      <Container size="md" py="xl" style={{ backdropFilter: 'blur(10px)' }}>
        <Title order={2} mb="md" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
          About Me
        </Title>

        <Paper
          shadow="xs"
          p="md"
          withBorder
          style={{
            backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid gutter="lg">
            <Grid.Col span={12}>
              <Text mb="sm" style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '500' }}>
                <IconCode size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                <strong>Model-Based Development Engineer:</strong> A professional with 6 + years of experience in HiL (Hardware-in-the-Loop) test environments. 
                My core strengths lie in bus modeling (CAN, FlexRay, and EtherCAT), communication validation, and ECU software verification.
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text mb="sm" style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '500' }}>
                <IconFlask size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                <strong>Junior Full-Stack Web Developer:</strong> Recently, I completed a 400+ hour immersive course where I built real-world applications using JavaScript, React.js, and MongoDB. 
                This experience sharpened my coding, problem-solving, and time management skills.
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text mb="sm" style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '500' }}>
                <IconBusinessplan size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                <strong>eCommerce Enthusiast:</strong> Outside of engineering, I’m exploring eCommerce through a side project focused on selling mineral supplements. 
                I’m passionate about business development, investments, and personal growth.
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text mb="sm" style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '500' }}>
                <IconUser size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                <strong>Continouse Learning & Growth:</strong> Whether it’s diving into emerging tech or refining software quality through smart testing, I bring curiosity and drive to every project I undertake.
              </Text>
            </Grid.Col>
          </Grid>

          <Space h="xl" />
          <Divider />
          <Space h="xl" />

          <Text style={{ fontSize: '1.1rem', fontWeight: '400', textAlign: 'center' }}>
            I'm always open to exciting opportunities and collaborations — feel free to reach out!
          </Text>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Button size="lg" variant="filled" color="blue" style={{ borderRadius: '50px' }} onClick={() => alert('Contact me!')}>
              Get in Touch
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
