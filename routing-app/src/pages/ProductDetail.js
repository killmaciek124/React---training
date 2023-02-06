import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const prarams = useParams();
  return (
    <>
      <h1>Product Detail </h1>
      <p>{prarams.id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
