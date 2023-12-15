
import React, { useState } from "react";
import "./NavbarStyles.css";
import { BurgerSpin as Icon } from "react-icons-animated";
import { Link } from "react-router-dom";
import { Home, Menu, Close } from "@mui/icons-material";
import logo from "../assets/mainlogo.png"
import { ReactSVG } from 'react-svg';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
var ls = require('local-storage');

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    console.log(i18n.language.toString())
    i18n.changeLanguage(lang)
  }
  const MenuItems = [
    // Make a list of Navlinks & their properties.
    // {
    //   title:"Home",
    //   url:"#hero",
    //   cName:"nav-links",
    //   icon:""
    // },
    // Make a list of Navlinks & their properties.
    {
      title: t("services"),
      url: "#services",
      cName: "nav-links",
      icon: ""
    },
    // Make a list of Navlinks & their properties.
    {
      title: t("gallery"),
      url: "#recommend",
      cName: "nav-links",
      icon: ""
    },
    // Make a list of Navlinks & their properties.
    {
      title: t("testimonials"),
      url: "#testimonials",
      cName: "nav-links",
      icon: ""
    },
    {
      title: t("about"),
      url: "#aboutus",
      cName: "nav-links",
      icon: ""
    },
  ];
  var flag = '🇩🇪'
  switch (ls.get('lang')) {
    case null:flag='🇩🇪';break;
    case 'du': flag = '🇩🇪'; break;
    case 'en': flag = '🇺🇸'; break;
    case 'ar': flag = '🇸🇦'; break;
    default: break;

  }
  const [selectedOption, setSelectedOption] = useState(flag);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Call the corresponding function based on the selected option
    switch (event.target.value) {
      case '🇩🇪':
        ls.set('lang', 'du')
        changeLanguageHandler("du")
        break;
      case '🇺🇸':
        ls.set('lang', 'en')
        changeLanguageHandler("en")
        break;
      case '🇸🇦':
        ls.set('lang', 'ar')
        changeLanguageHandler("ar")
        break;
      default:
        changeLanguageHandler("de")
        break;


    }
    setTimeout(() => { 
      window.location.reload(); 
    },);
  };
  return (
    <nav className="NavbarItems">
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <select value={selectedOption} onChange={handleOptionChange} className="dropdown">

          <option value="🇩🇪">🇩🇪</option>
          <option value="🇺🇸">🇺🇸</option>
          <option value="🇸🇦">🇸🇦</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="menu-icons" onClick={() => setIcon(!icon)}>
        {!icon ? <Menu /> : <Close />}

      </div>
      <ul className={icon ? "nav-menu active" : "nav-menu"}>

        {MenuItems.map((item, index) => (
          <li className="navLi" key={index}>
            <a href={item.url} className={item.cName}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;