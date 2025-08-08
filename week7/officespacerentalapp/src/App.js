import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const img = (
    <img
      src="https://img.cofynd.com/images/original/0a78af7a648f1a981f451a869b24ef51d95a5f0e.jpg"
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  const colors = ItemName.Rent <= 60000 ? ["textRed"] : ["textGreen"];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {img}
      <br />
      <h3><strong>Name:</strong> {ItemName.Name}</h3>
      <h3 className={colors.join(" ")}><strong>Rent:</strong> Rs. {ItemName.Rent}</h3>
      <h3><strong>Address:</strong> {ItemName.Address}</h3>
    </div>
  );
}

export default App;
