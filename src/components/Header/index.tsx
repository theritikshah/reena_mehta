"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./header.module.scss";
import Navbar from "./Navbar";

function Header() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <span className={styles.logo} onClick={() => router.push("/")}>
        Reena Mehta
      </span>
      <Navbar />
    </div>
  );
}

export default Header;
