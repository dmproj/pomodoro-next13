"use client";

import styles from "../styles/Navbar.module.css";
import { LocalPhone, LocalPhoneOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <LocalPhoneOutlined />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>+1 234 56789</div>
        </div>
      </div>
      <div className={styles.item}>center</div>
      <div className={styles.item}>right</div>
    </div>
  );
};

export default Navbar;
