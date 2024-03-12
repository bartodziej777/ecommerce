import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import Hamburger from "./Hamburger";

export default function Navigation() {
  const [active, setActive] = useState<boolean>(false);

  const handleOnClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleOnResize = () => {
      if (window.innerWidth > 768) {
        setActive(false);
      }
    };

    window.addEventListener("resize", handleOnResize);
  }, []);

  return (
    <>
      <header className="bg-surfaceLight dark:bg-surfaceDark py-2 px-4 lg:px-16 xl:px-32 2xl:px-64 text-2xl">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="capitalize line-through">
            unseen
          </Link>
          <nav
            className={`absolute md:static w-screen md:w-auto h-screen md:h-auto bg-surfaceLight dark:bg-surfaceDark top-0 md:top-auto left-full md:left-auto duration-300 md:duration-0 ease-in ${active ? "-translate-x-full" : "translate-x-0"} md:translate-x-0 md:flex`}
          >
            <ul className="flex capitalize flex-col md:flex-row text-center h-screen md:h-auto justify-center text-4xl md:text-lg">
              <li className="px-2 py-2 md:py-0">
                <NavLink
                  to="/hoodies"
                  style={({ isActive }) => ({
                    color: isActive ? "#7371fc" : "",
                  })}
                  className="hover:underline"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  hoodies
                </NavLink>
              </li>
              <li className="px-2 py-2 md:py-0">
                <NavLink
                  to="/tshirts"
                  style={({ isActive }) => ({
                    color: isActive ? "#7371fc" : "",
                  })}
                  className="hover:underline"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  tshirts
                </NavLink>
              </li>
              <li className="px-2 py-2 md:py-0">
                <NavLink
                  to="/accessories"
                  style={({ isActive }) => ({
                    color: isActive ? "#7371fc" : "",
                  })}
                  className="hover:underline"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  accessories
                </NavLink>
              </li>
              <li className="px-2 py-2 md:py-0">
                <NavLink
                  to="/sale"
                  style={({ isActive }) => ({
                    color: isActive ? "#7371fc" : "",
                  })}
                  className="hover:underline"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  sale
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "#7371fc" : "",
              })}
              className="hover:underline"
            >
              <IoMdCart />
            </NavLink>
            <NavLink
              to="/settings"
              style={({ isActive }) => ({
                color: isActive ? "#7371fc" : "",
              })}
              className="hover:underline"
            >
              <IoMdPerson />
            </NavLink>
            <Hamburger clickHandler={handleOnClick} active={active} />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
