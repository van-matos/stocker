import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../context/UserContext";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
/* import NewProductPage from "./NewProductPage";
 */
import GlobalStyle from "../assets/styles/globalStyles";

function App() {
  const [token, setToken] = useState({});

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/*       <Route path="/new" element={<NewProductPage />} />*/}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
