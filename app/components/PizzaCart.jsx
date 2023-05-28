"use client";

import Image from "next/image";
import styles from "../styles/PizzaCart.module.css";

const PizzaCart = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/f6.jpg"
        alt=""
        width={500}
        height={500}
        className={styles.image}
      />
      <h1 className={styles.title}>PIZZA CARBONARA DOUBLE CHEESE</h1>
      <span className={styles.price}>$22.99</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum molestias
        accusamus provident ex. Itaque iusto dignissimos architecto eveniet sapiente
        corrupti.
      </p>
    </div>
  );
};

export default PizzaCart;
