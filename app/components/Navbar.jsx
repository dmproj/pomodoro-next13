"use client";

import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import { LocalMallOutlined, LocalPhone, LocalPhoneOutlined } from "@mui/icons-material";

const Navbar = () => {
  const LargeIcon = () => {
    return <LocalMallOutlined className={styles.localMallOutlined} />;
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <LocalPhoneOutlined />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>+44 523 5677777</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src={
              "https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-tools-design-website-name-logo-posters-and-25.png"
            }
            alt=""
            width={70}
            height={60}
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          {LargeIcon()}
          {/* <LocalMallOutlined className={styles.localMallOutlined}/> */}
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
