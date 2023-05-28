import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
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
          <Image src={"/images/f7.jpg"} width={400} height={200} alt="" />
        </div>
      </div>
      <div className={styles.right}>a</div>
    </div>
  );
};

export default Product;
