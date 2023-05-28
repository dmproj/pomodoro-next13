"use client";

import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={"/images/bg.jpeg"} alt="" width={1125} height={750} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facilis.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR LOCATIONS</h1>
          <p className={styles.text}>
            33 Burnham Close
            <br />
            Windsor
            <br />
            SL3 9LT
          </p>
          <p className={styles.text}>
            33 Burnham Close
            <br />
            Windsor
            <br />
            SL3 9LT
          </p>
          <p className={styles.text}>
            33 Burnham Close
            <br />
            Windsor
            <br />
            SL3 9LT
          </p>
          <p className={styles.text}>
            33 Burnham Close
            <br />
            Windsor
            <br />
            SL3 9LT
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 AM - 11:00 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            10:00 AM - 11:30 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
