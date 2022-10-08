import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../context/UserContext";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
