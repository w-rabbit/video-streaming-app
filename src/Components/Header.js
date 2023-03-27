import React from "react";
import styles from "./Header.module.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import LogoImage from "../Images/snowflake.svg";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <MenuSharpIcon />
        <img className={styles.header__logo} src={LogoImage} alt="" />
      </div>
      <div className={styles.header__input}>
        <input
          type="text"
          placeholder="Search"
          className={styles.header__inputBar}
        />
        <SearchSharpIcon className={styles.header__inputButton} />
      </div>
      <div className={styles.header__icons}>
        <VideoCallSharpIcon className={styles.header__icon} />
        <AppsSharpIcon className={styles.header__icon} />
        <NotificationsSharpIcon className={styles.header__icon} />
        <Avatar
          className={styles.header__avatar}
          src="https://avatars.githubusercontent.com/u/24275565?s=400&u=32410e91716cd226c35eea3713d05aa0e04a17de&v=4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
