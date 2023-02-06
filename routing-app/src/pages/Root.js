import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/*OUTLET TO SĄ CHILDREN ELEMENTU ROOTLAYOUT */}
      </main>
    </>
  );
};

export default RootLayout;
