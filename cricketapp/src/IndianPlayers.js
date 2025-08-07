import React from 'react';

const IndianPlayers = () => {
  const players = ['Kohli', 'Rohit', 'Shreyas', 'Pant', 'Bumrah', 'Vinayak'];
  const [first, second, third, fourth, fifth, sixth] = players;
  const oddPlayers = [first, third, fifth];
  const evenPlayers = [second, fourth, sixth];

  const T20players = ['Kohli', 'Hardik', 'Hima Varshith','Santhosh'];
  const RanjiTrophy = ['Jadeja', 'Ashwin'];

  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Players</h2>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>

      <h2>Even Players</h2>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>

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
