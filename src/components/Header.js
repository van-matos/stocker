import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext from "../context/UserContext";

function Header() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  function clearUser() {
    setToken("");
    localStorage.clear();
    navigate("/");
  }

  return (
    <TopBar>
      <h1>Stocker</h1>
      <h3 onClick={clearUser}>Logout</h3>
    </TopBar>
  );
}

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
