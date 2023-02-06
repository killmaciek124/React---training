import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routesElements = createRoutesFromElements( // ALTERNATIVE WAY
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routesElements);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // kiedy wpiszemy wrong path (url)
    children: [
      { index: true, element: <HomePage /> }, // index: true zastepuje: path: "" albo path: "/", czyli defaultowa strona na rodzicu
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      // ':' okresla nam ze id to dynamiczny path i mamy do niej dostep przez useParams
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
