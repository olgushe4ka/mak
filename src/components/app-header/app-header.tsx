import headerStyles from "./app-header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AppHeader() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("Главная");

  useEffect(() => {
    // Определите активную страницу на основе URL
    switch (location.pathname) {
      case "/":
        setActivePage("Главная");
        break;
      // case "/about":
      //   setActivePage("О нас");
      //   break;
      // case "/portfolio":
      //   setActivePage("Портфолио");
      //   break;
      // case "/price":
      //   setActivePage("Услуги и цены");
      //   break;
      case "/contacnts":
        setActivePage("Контакты");
        break;
      default:
        setActivePage("");
        break;
    }
  }, [location.pathname]);

  console.log(activePage);

  return (
    <header className={`${headerStyles.header} pl-15 pr-15 pb-0 pt-0`}>
      <div className={`${headerStyles.boxLeft}`}>
        <Link
          to="/"
          className={`${headerStyles.menu} ${
            activePage === "Главная" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>Главная</p>
        </Link>
        {/* <Link
          to="/about"
          className={`${headerStyles.menu} ${
            activePage === "О нас" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>О нас</p>
        </Link>
        <Link
          to="/portfolio"
          className={`${headerStyles.menu} ${
            activePage === "Портфолио" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>Портфолио</p>
        </Link>
        <Link
          to="/price"
          className={`${headerStyles.menu} ${
            activePage === "Услуги и цены" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>Услуги и цены</p>
        </Link> */}
        <Link
          to="/contacnts"
          className={`${headerStyles.menu} ${
            activePage === "Контакты" ? headerStyles.active : ""
          }`}
        >
          <p className={`${headerStyles.menuText}`}>Контакты</p>
        </Link>
      </div>
      <Link to="/" className={`${headerStyles.logo}`}>
        <img
          src={require("../../images/logo2.jpg")}
          alt="логотип"
          width={100}
        />
      </Link>
    </header>
  );
}

export default AppHeader;
