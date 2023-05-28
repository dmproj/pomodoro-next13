"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "TOMATO CHICKEN",
    price: ["$19,99", "$24.99", "$29.99"],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eius?",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={"/images/01f.jpg"} width={700} height={500} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>
          <u>{pizza.price[size]}</u>
        </span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Pick the pizza size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src={"/images/p.png"}
              alt=""
              width={200}
              height={150}
              className={styles.image}
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src={"/images/p.png"}
              alt=""
              width={220}
              height={170}
              className={styles.image}
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image
              src={"/images/p.png"}
              alt=""
              width={240}
              height={190}
              className={styles.image}
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.ingredientsAll}>Add ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double shees</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double chicken</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double vegs</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
