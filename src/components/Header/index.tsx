import React from "react";
import styles from "./header.module.scss";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Reena Mehta</span>
      <Navbar />
    </div>
  );
}

export default Header;
