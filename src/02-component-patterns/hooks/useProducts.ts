import { useEffect, useRef, useState } from "react";
import { Product, InitialValues, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.min(
      Math.max(counter + value, 0),
      initialValues?.maxCount ?? Infinity
    );
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
      maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};
