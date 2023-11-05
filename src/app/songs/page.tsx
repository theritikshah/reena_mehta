import styles from "./songs.module.scss";
import songs from "./songs";

function Songs() {
  return (
    <div className={styles.container}>
      <div className={styles.video_row}>
        {songs.map((song) => (
          <iframe
            key={song}
            width="560"
            height="315"
            src={song}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
}

export default Songs;
