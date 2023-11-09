import { useState, useEffect } from 'react';
import './App.css';
import { getLike } from './services/pet-api';
import { Grid, Card, Image, Text, Button, Title } from '@mantine/core';
import PetCard from './components/PetCard';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState<string>('');
  const pets = [
    {
      image: '../public/IMG_0693.jpg',
      numberOfLikes: 10,
    },
    {
      image: '../public/IMG_0693.jpg',
      numberOfLikes: 5,
    },
    {
      image: '../public/IMG_0693.jpg',
      numberOfLikes: 2,
    },
    {
      image: '../public/IMG_0693.jpg',
      numberOfLikes: 10,
    },
    {
      image: '../public/IMG_0693.jpg',
      numberOfLikes: 5,
    },
    {
      image: '../public/IMG_0693.jpg',
      numberOfLikes: 2,
    },
  ];

  useEffect(() => {
    // async function getLikes() {
    //   const response = await getLike();
    //   console.log(response);
    //   setLikes(response);
    // }
    // getLikes();
  }, []);

  return (
    <>
      <p>The Petbook</p>
      <Grid>
        {pets.map(({ image, numberOfLikes }) => (
          <PetCard image={image} numberOfLikes={numberOfLikes} />
        ))}
      </Grid>
    </>
  );
}

export default App;
