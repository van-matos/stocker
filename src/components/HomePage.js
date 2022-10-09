import { useContext } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import UserContext from "../context/UserContext";

function HomePage() {
  const { setToken } = useContext(UserContext);
  const localToken = localStorage.getItem("token");

  if (localToken) {
    setToken(localToken);
  }

  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export default HomePage;
