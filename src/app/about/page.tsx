import styles from "./about.module.scss";

function about() {
  return (
    <div className={styles.container}>
      <img src="/reena_mehta_interview.jpg" alt="reena mehta" />
      <div className={styles.about}>
        <p>
          Hey there! I'm Reena Mehta, an Indian singer on a musical journey.
          Growing up in the heart of India, I found my voice through classical
          Indian ragas. But I'm not confined by boundaries. I explore diverse
          genres, creating a fusion of melodies that tell stories of life's ups
          and downs.
        </p>
        <p>
          My music is a universal language that connects us. From enchanting
          live performances on global stages to chart-topping singles, I've
          shared my passion for music worldwide. Versatility is my strength,
          allowing me to switch effortlessly between languages and styles.
        </p>
        <p>
          For me, music is more than a collection of notes; it's a journey of
          emotions. My lyrics touch hearts, and my melodies linger in souls.
          Join me as we explore the world of music together. Thanks for being a
          part of this incredible musical adventure!
        </p>
      </div>
    </div>
  );
}

export default about;
