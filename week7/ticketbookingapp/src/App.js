import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable for conditional rendering
  let pageContent;

  if (isLoggedIn) {
    pageContent = (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Welcome Back</h1>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  } else {
    pageContent = (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Please Sign Up</h1>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    );
  }

  return <div>{pageContent}</div>;
}

export default App;
