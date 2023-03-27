import React from "react";
import styles from "./Sidebar.module.css";
import SidebarRow from "./SidebarRow";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarRow selected={true} title="Home" Icon={HomeSharpIcon} />
      <SidebarRow title="Trending" Icon={WhatshotSharpIcon} />
      <SidebarRow title="Subscriptons" Icon={SubscriptionsSharpIcon} />
    </div>
  );
};

export default Sidebar;
