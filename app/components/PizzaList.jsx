"use client";

import styles from"../styles/PizzaList.module.css";
import PizzaCart from "./PizzaCart";

const PizzaList = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>GET YOUR PIZZA</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis illum
          inventore veritatis pariatur nulla blanditiis id quis sequi dolores dicta.
        </p>
        <div className={styles.wrapper}>
          <PizzaCart />
          <PizzaCart />
          <PizzaCart />
          <PizzaCart />
          <PizzaCart />
          <PizzaCart />
          <PizzaCart />
          <PizzaCart />
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
