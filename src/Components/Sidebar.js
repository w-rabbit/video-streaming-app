import React from "react";
import styles from "./Sidebar.module.css";
import SidebarRow from "./SidebarRow";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarRow selected={true} title="Home" Icon={HomeSharpIcon} />
      <SidebarRow title="Trending" Icon={WhatshotSharpIcon} />
      <SidebarRow title="Subscriptons" Icon={SubscriptionsSharpIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrarySharpIcon} />
      <SidebarRow title="History" Icon={HistorySharpIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterSharpIcon} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoSharpIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltSharpIcon} />
      <SidebarRow title="Show More" Icon={ExpandMoreSharpIcon} />
    </div>
  );
};

export default Sidebar;
