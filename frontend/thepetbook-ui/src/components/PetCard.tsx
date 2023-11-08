import { Grid, Card, Image, Text, Button } from '@mantine/core';

interface PetCardProps {
  image: string;
  numberOfLikes: number;
}

function PetCard({ image, numberOfLikes }: PetCardProps) {
  return (
    <>
      <Grid.Col span={4}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={image} height={500} alt="Norway" />
          </Card.Section>

          <Text size="sm" c="dimmed" ta="center">
            Number of likes: {numberOfLikes}
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
    </>
  );
}

export default PetCard;