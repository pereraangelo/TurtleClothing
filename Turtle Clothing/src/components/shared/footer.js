import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer}  mt-5 p-3`}>
      <p>Copyright {new Date().getFullYear()} @ Turtle Clothing </p>
    </footer>
  );
};

export default Footer;
