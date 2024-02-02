import React, { useMemo, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  // TODO: Implementar maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // TODO: isMaxReached = useCllaback, dependencias [counter, maxCount] => boolean

  const isMaxReached = useMemo(() => {
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);


  // TRUE si el contador === maxCount
  // FALSE si el contador < maxCount

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached ? styles.disabledButton : ""
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
