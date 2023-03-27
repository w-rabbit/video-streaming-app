import React from "react";
import styles from "./SidebarRow.module.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`${styles.sidebarRow} ${selected && styles.selected}`}>
      <Icon className={styles.sidebarRow__icon} />
      <h2 className={styles.sidebarRow__title}>{title}</h2>
    </div>
  );
};

export default SidebarRow;
