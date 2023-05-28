import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image src={"/images/p.png"} alt="" width={150} height={150} />
              </div>
            </td>
            <td>
              <span className={styles.name}>Hawaiian</span>
            </td>
            <td>
              <span className={styles.extras}>Double cheese and chicken</span>
            </td>
            <td>
              <span className={styles.price}>$19.99 </span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$29.99</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totaltext}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$99.99
          </div>
          <div className={styles.totaltext}>
            <b className={styles.totalTextTitle}>Discount:</b>$12.99
          </div>
          <div className={styles.totaltext}>
            <b className={styles.totalTextTitle}>Total:</b>$70.00
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
