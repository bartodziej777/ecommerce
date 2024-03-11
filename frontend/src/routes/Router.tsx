import { Routes, Route } from "react-router-dom";
//client routes
import Navigation from "../components/client/Navigation";
import Home from "../pages/client/home/Home";
import Hoodies from "../pages/client/products/Hoodies";
import Tshirts from "../pages/client/products/Tshirts";
import Accessories from "../pages/client/products/Accessories";
import Item from "../pages/client/item/Item";
import Sale from "../pages/client/sale/Sale";
import Cart from "../pages/client/cart/Cart";
import Orders from "../pages/client/orders/Orders";
import Order from "../pages/client/order/Order";
import Settings from "../pages/client/settings/Settings";
//admim routes
import AdminNavigation from "../components/admin/Navigation";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Products from "../pages/admin/products/Products";
import Product from "../pages/admin/product/Product";
import AddProduct from "../pages/admin/addProduct/AddProduct";
import AdminOrders from "../pages/admin/orders/Orders";
import AdminOrder from "../pages/admin/order/Order";
import AdminSettings from "../pages/admin/settings/Settings";
//auth routes
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Forgot from "../pages/auth/Forgot";
//others
import NotFound from "../pages/notFound/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders">
          <Route index element={<Orders />} />
          <Route path=":id" element={<Order />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/admin" element={<AdminNavigation />}>
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="add" element={<AddProduct />} />
        </Route>
        <Route path="orders">
          <Route index element={<AdminOrders />} />
          <Route path=":id" element={<AdminOrder />} />
        </Route>
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
