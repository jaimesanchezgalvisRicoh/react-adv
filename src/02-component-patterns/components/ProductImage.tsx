import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgTShow: string;

  if (img) {
    imgTShow = img;
  } else if (product.img) {
    imgTShow = product.img;
  } else {
    imgTShow = "";
  }

  return (
    <img
      className={styles.productImg}
      src={imgTShow || noImage}
      alt="Product"
    />
  );
};
