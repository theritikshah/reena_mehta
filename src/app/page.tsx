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
      {/* {JSON.stringify(project)} */}
    </div>
  );
}
