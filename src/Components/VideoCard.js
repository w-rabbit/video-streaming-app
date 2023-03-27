import React from "react";
import { Avatar } from "@mui/material";
import styles from "./VideoCard.module.css";

const VideoCard = ({ title, image, channel, views, timestamp }) => {
  return (
    <div className={styles.videoCard}>
      <img src={image} alt="" className={styles.videoCard__thumbnail} />
      <div className={styles.videoCard__info}>
        <Avatar className={styles.videoCard_avatar} alt={channel} />
        <div className={styles.videoCard__text}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} Views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
