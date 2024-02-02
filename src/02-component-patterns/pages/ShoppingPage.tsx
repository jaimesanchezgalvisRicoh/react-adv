import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product?.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 15,
        }}
      >
        {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
              }}
            />
            <ProductTitle className="text-white text-bolt" />
            <ProductButtons className="custom-buttons" />
            <button className="btn btn-warning" onClick={reset}>
              Reset
            </button>
            <button
              onClick={() => {
                count > 0 && increaseBy(-2);
              }}
            >
              -2
            </button>
            {!isMaxCountReached && (
              <button
                onClick={() => {
                  !isMaxCountReached && increaseBy(2);
                }}
              >
                +2
              </button>
            )}
            <span>count: {count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
