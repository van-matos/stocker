import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>
        <h1>Stocker</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 72px;
  left: 0;
  top: 0;
  padding: 0 20px 0 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  h1 {
    font-size: 34px;
  }
`;

export default Header;
