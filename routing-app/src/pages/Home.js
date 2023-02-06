import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate(); // OTHER WAY TO CHANGE PAGES...
  // .. . . uzywamy useNavigate() gdy np jakis timer nam skonczy tykac itp (programowalnie zmieniamy strone)
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">ProductsPage</Link>
      </p>
      <button onClick={navigateHandler}>NAVIGATE EXAMPLE</button>
    </>
  );
};

export default HomePage;
