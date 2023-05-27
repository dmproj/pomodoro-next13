import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import styles from "../styles/FeaturedList.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeaturedList = () => {
  const [index, setIndex] = useState(0);
  const featured = [
    "https://cdn.stocksnap.io/img-thumbs/960w/bread-bun_UGX0HQQPWI.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/pizza-wine_IJESKJTYB6.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/salad-bowl_PLOA1CWIRK.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/woman-pizza_FSYENT8IIW.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/steak-asparagus_JMJZKYXUWD.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/salad-bowl_NI4QYAXHA0.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "L") {
      setIndex((prevIndex) => (prevIndex - 1 + featured.length) % featured.length);
    }
    if (direction === "R") {
      setIndex((prevIndex) => (prevIndex + 1) % featured.length);
    }
  };
  

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: "20px", right: "auto" }}
        onClick={() => handleArrow("L")}
      >
        <ArrowBackIosNewOutlined className={styles.arrowLeft} />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-50 * index}vw)` }}
      >
        <div className={styles.imgContainer}>
          {featured.map((img, i) => (
            <Image
              src={img}
              key={i}
              alt=""
              width={960}
              height={640}
              className={styles.img}
            />
          ))}
        </div>
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: "20px", left: "auto" }}
        onClick={() => handleArrow("R")}
      >
        <ArrowForwardIosOutlined className={styles.arrowRight} />
      </div>
    </div>
  );
};

export default FeaturedList;
