import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {

  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');

    if (!res.ok) {
      throw new Error('Failed to fetch a joke');
    }

    const data = await res.json();
    setJoke(`${data.setup}  ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Another Joke</button>
    </div>
  );
};

export default JokeFetcher;