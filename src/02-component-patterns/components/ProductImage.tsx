import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
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
      className={`${styles.productImg} ${className}`}
      src={imgTShow || noImage}
      alt="Product"
      style={style}
    />
  );
};
