  import React, { useState } from "react";
  import Logo from '../assets/img/logo.svg';

  import { FaTelegramPlane } from "react-icons/fa";
  import { AiOutlineInstagram } from "react-icons/ai";
  import { HiOutlineBars3 } from "react-icons/hi2";
  import Box from "@mui/material/Box";
  import Drawer from "@mui/material/Drawer";
  import List from "@mui/material/List";
  import Divider from "@mui/material/Divider";
  import ListItem from "@mui/material/ListItem";
  import ListItemButton from "@mui/material/ListItemButton";
  import ListItemIcon from "@mui/material/ListItemIcon";
  import ListItemText from "@mui/material/ListItemText";
  import { useTranslation } from "react-i18next";

  export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (event) => {
      const ClickedLanguage = event
      i18n.changeLanguage(ClickedLanguage);
    };

    const menuOptions = [ 
      { text: "Home" },
      { text: "About" },
      { text: "Tours" },
      { text: "Contacts" },
      { text: "UZ" },
      { text: "ENG" },
      { text: "RU" },
      { text: <FaTelegramPlane /> },
      { text: <AiOutlineInstagram /> },
    ];

    return (
      <div className="header">
        <nav>
          <div className="nav-logo-container">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar-links-container">
            <a className="nav_link" href="#home">{t("header.menu1")}</a>
            <a className="nav_link" href="#about">{t("header.menu2")}</a>
            <a className="nav_link" href="#tours">{t("header.menu3")}</a>
            <a className="nav_link" href="#contact">{t("header.menu4")}</a>
          </div>
          <div className="navbar-icons-container">
            <a href="#" onClick={()=>handleChange('uz')} >UZ</a>
            <a href="#" onClick={()=>handleChange('en')} >ENG</a>
            <a href="#" onClick={()=>handleChange('ru')} >RU</a>
            <a className="telegramIcon" href="https://t.me/TUIT_ERGASHEV" id='contact'>
              <FaTelegramPlane className="red" />
            </a>
            <a className="instagramIcon" href="https://www.instagram.com/your_profile" id='contact'>
              <AiOutlineInstagram className="red" />
            </a>
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      </div>
    );
  };
