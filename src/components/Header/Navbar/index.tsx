"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import styles from "./navbar.module.scss";

function Navbar() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <ul className={styles.navbar}>
      <li
        onClick={() => {
          router.push("/");
        }}
        className={pathName === "/" ? styles.active : ""}
      >
        <a>Home</a>
      </li>
      <li
        onClick={() => {
          router.push("/songs");
        }}
        className={pathName === "/songs" ? styles.active : ""}
      >
        <a>Songs</a>
      </li>
      <li
        onClick={() => {
          router.push("/about");
        }}
        className={pathName === "/about" ? styles.active : ""}
      >
        <a>About</a>
      </li>
    </ul>
  );
}

export default Navbar;
