"use client";

import Image from "next/image";
import styles from "../styles/Orders.module.css";

import { CheckOutlined, SafetyCheckOutlined } from "@mui/icons-material";

const Orders = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th></th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src={"/images/p.png"} alt="" width={150} height={150} />
                </div>
              </td>
              <td>
                <span className={styles.id}>987654</span>
              </td>
              <td>
                <span className={styles.name}>Carl Johns</span>
              </td>
              <td>
                <span className={styles.price}>11, Union St. </span>
              </td>
              <td>
                <span className={styles.total}>$29.99</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <CheckOutlined className={styles.icon} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <SafetyCheckOutlined className={styles.icon} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <CheckOutlined className={styles.icon} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <SafetyCheckOutlined className={styles.icon} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <CheckOutlined className={styles.icon} />
            <span>On its way</span>
            <div className={styles.checkedIcon}>
              <SafetyCheckOutlined className={styles.icon} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <CheckOutlined className={styles.icon} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <SafetyCheckOutlined className={styles.icon} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.checkout}>
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
