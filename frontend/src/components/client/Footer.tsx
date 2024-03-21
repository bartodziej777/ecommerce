import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const [isAbsolute, setIsAbsolute] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleSetPosition = () => {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const mainHeight = document.querySelector("main")?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      windowHeight - (headerHeight + mainHeight) > 100
        ? setIsAbsolute(true)
        : setIsAbsolute(false);
    };

    handleSetPosition();
  }, [location]);

  return (
    <footer
      className={`${isAbsolute ? "w-full absolute bottom-0" : "static"} bg-surfaceLight dark:bg-surfaceDark py-2 lg:py-4 px-4 lg:px-16 xl:px-32 2xl:px-64 text-textLight1 dark:text-textDark1`}
    >
      <p>
        <span className="capitalize line-through">unseen</span> 2024 &copy;. All
        rights reserved.
      </p>
    </footer>
  );
}
