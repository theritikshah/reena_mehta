import Image from "next/image";
import styles from "./page.module.css";
import { getProjects } from "../../sanity/sanity-utils";

export default async function Home() {
  const project = await getProjects();

  return <div>{JSON.stringify(project)}</div>;
}
