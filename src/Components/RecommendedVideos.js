import React from "react";
import styles from "./RecommendedVideos.module.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className={styles.recommendedVideos}>
      <h2>Recommended</h2>
      <div className={styles.recommendedVideos__videos}>
        <VideoCard
          title={'Slavoj Žižek: "I\'m generally opposed to wisdom"'}
          channel={"Det Kgl. Bibliotek"}
          views={"6.41K"}
          timestamp={"2:48"}
          image={"https://img.youtube.com/vi/tKoGQpEkpO0/sddefault.jpg"}
        />
        <VideoCard
          title={'Slavoj Žižek: "I\'m generally opposed to wisdom"'}
          channel={"Det Kgl. Bibliotek"}
          views={"6.41K"}
          timestamp={"2:48"}
          image={"https://img.youtube.com/vi/tKoGQpEkpO0/sddefault.jpg"}
        />
        <VideoCard
          title={'Slavoj Žižek: "I\'m generally opposed to wisdom"'}
          channel={"Det Kgl. Bibliotek"}
          views={"6.41K"}
          timestamp={"2:48"}
          image={"https://img.youtube.com/vi/tKoGQpEkpO0/sddefault.jpg"}
        />
        <VideoCard
          title={'Slavoj Žižek: "I\'m generally opposed to wisdom"'}
          channel={"Det Kgl. Bibliotek"}
          views={"6.41K"}
          timestamp={"2:48"}
          image={"https://img.youtube.com/vi/tKoGQpEkpO0/sddefault.jpg"}
        />
        <VideoCard
          title={'Slavoj Žižek: "I\'m generally opposed to wisdom"'}
          channel={"Det Kgl. Bibliotek"}
          views={"6.41K"}
          timestamp={"2:48"}
          image={"https://img.youtube.com/vi/tKoGQpEkpO0/sddefault.jpg"}
        />
        <VideoCard
          title={'Slavoj Žižek: "I\'m generally opposed to wisdom"'}
          channel={"Det Kgl. Bibliotek"}
          views={"6.41K"}
          timestamp={"2:48"}
          image={"https://img.youtube.com/vi/tKoGQpEkpO0/sddefault.jpg"}
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
