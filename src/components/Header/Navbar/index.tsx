import React from "react";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>Home</li>
      <li>Songs</li>
      <li>About</li>
    </ul>
  );
}

export default Navbar;
