import { Outlet } from "react-router-dom";
import Footer from "./client/Footer";
import Navigation from "./client/Navigation";
import AdminNavigation from "./admin/Navigation";

export default function Wrapper({ isAdmin }: { isAdmin: boolean }) {
  return (
    <>
      {isAdmin ? <AdminNavigation /> : <Navigation />}
      <Outlet />
      {isAdmin ? "" : <Footer />}
    </>
  );
}
