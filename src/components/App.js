import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../context/UserContext";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import GlobalStyle from "../assets/styles/globalStyles";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
