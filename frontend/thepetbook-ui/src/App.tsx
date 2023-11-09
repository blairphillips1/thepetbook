import { Grid, Title } from '@mantine/core';
import PetCard from './components/PetCard';

function App() {
  const pets = [
    {
      image: '../public/pet1.jpg',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet2.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet3.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet4.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet5.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet6.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet7.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet8.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet9.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet10.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet11.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet12.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet13.png',
      numberOfLikes: 0,
    },
    {
      image: '../public/pet14.png',
      numberOfLikes: 0,
    },
  ];

  return (
    <>
      <Title className="titleClass" ta="center" order={1}>
        The Petbook
      </Title>
      <Grid>
        {pets.map(({ image, numberOfLikes }) => (
          <PetCard key={image} image={image} numberOfLikes={numberOfLikes} />
        ))}
      </Grid>
    </>
  );
}

export default App;
