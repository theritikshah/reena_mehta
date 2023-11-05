import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import reenaMehta from "../../public/reena_mehta_svg.svg";
import styles from "./page.module.scss";

export default async function Home() {
  const project = await getProjects();

  return (
    <div className={styles.container}>
      <Image
        className={styles.reena_mehta_illustration}
        src="/reena_mehta_svg.svg"
        alt="Reena Metha illustration"
        width={1000}
        height={350}
      />

      <div className={styles.featured_logos}>
        <img
          className={styles.logos_desktop}
          src="/logos/logos_desktop.png"
          alt=""
        />
        <img
          className={styles.logos_tablet}
          src="/logos/logos_tablet.png"
          alt=""
        />
        <img
          className={styles.logos_mobile}
          src="/logos/logos_mobile.png"
          alt=""
        />
      </div>

      <div className={styles.artistic_tale}>
        <div className={styles.content}>
          <h2>Artist's Tale</h2>

          <p>
            I am Reena Mehta, an Indian vocalist embarking on a profound musical
            odyssey. Raised in the heartland of India, I discovered my musical
            identity within the rich tapestry of classical Indian ragas. Yet, my
            artistic vision knows no bounds, as I delve into a multifarious
            array of musical genres, harmoniously weaving together melodies that
            narrate the intricate stories of life's myriad vicissitudes.
          </p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.reena_mehta_bw}
            src="/assests/reena_mehta.png"
            alt="Reena mehta black and white image"
          />
          <p>
            I am Reena Mehta, an Indian vocalist embarking on a profound musical
            odyssey. Raised in the heartland of India, I discovered my musical
            identity within the rich tapestry of classical Indian ragas. Yet, my
            artistic vision knows no bounds, as I delve into a multifarious
            array of musical genres, harmoniously weaving together melodies that
            narrate the intricate stories of life's myriad vicissitudes.
          </p>
          <img className={styles.mic} src="/assests/mic.png" alt="mic" />
        </div>
      </div>
      <div className={styles.musical_journey_section}>
        <img
          className={styles.reena_mehta_illustration}
          src="/reena_mehta_musical_journey.jpg"
          alt="Reena Metha illustration"
        />
      </div>

      {/* {JSON.stringify(project)} */}
    </div>
  );
}
