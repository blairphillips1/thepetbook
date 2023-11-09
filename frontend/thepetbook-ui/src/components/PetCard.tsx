import { Grid, Card, Image, Text, Button } from '@mantine/core';
import { AiFillLike } from 'react-icons/ai';
import React from 'react';

interface PetCardProps {
  readonly image: string;
  readonly numberOfLikes: number;
  readonly key: string;
}

function PetCard({ image, numberOfLikes, key }: PetCardProps) {
  return (
    <React.Fragment key={key}>
      <Grid.Col span={4}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={image} height={500} alt="Norway" />
          </Card.Section>

          <Text size="sm" c="dimmed" ta="center">
            Number of likes: {numberOfLikes}
          </Text>

          <Button variant="light" color="blue" fullWidth mt="sm" radius="lg">
            <AiFillLike /> Like
          </Button>
        </Card>
      </Grid.Col>
    </React.Fragment>
  );
}

export default PetCard;
