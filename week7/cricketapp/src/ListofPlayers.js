import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 85 },
    { name: 'Hima Varshith', score: 75 },
    { name: 'Vinayak', score: 65 },
    { name: 'Shreyas', score: 72 },
    { name: 'Jadeja', score: 30 },
    { name: 'Dhoni', score: 90 },
    { name: 'Pant', score: 55 },
    { name: 'Ashwin', score: 35 },
    { name: 'Santhosh', score: 77 },
    { name: 'Bumrah', score: 82 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} {p.score}</li>
        ))}
      </ul>

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
