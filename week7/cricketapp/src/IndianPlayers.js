import React from 'react';

const IndianPlayers = () => {
  const players = ['Kohli', 'Rohit', 'Shreyas', 'Hima Varshith', 'Bumrah', 'Santhosh'];

  const [first, second, third, fourth, fifth, sixth] = players;

  const oddPlayers = [first, third, fifth];
  const evenPlayers = [second, fourth, sixth];

  const T20players = [
    'Kohli', 'Shreyas', 'Pant'
  ];
  const RanjiPlayers = [
    'Jadeja', 'Ashwin',"Vinayak"
  ];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <p>First : {first}</p>
      <p>Third : {third}</p>
      <p>Fifth : {fifth}</p>

      <h2>Even Players</h2>
      <p>Second : {second}</p>
      <p>Fourth : {fourth}</p>
      <p>Sixth : {sixth}</p>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

