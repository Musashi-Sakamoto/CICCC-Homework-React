import React, { useState } from "react";
import TodoPicker, { Product } from "../TodoPicker";
import { products as menus } from "../../utils/constants";
import TodoItem from "../TodoItem";
import styles from "./Todo.module.css";

const Todo = () => {
  const [selected, setSelected] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(JSON.parse(event.target.value));
  };

  const onHandleClick = () => {
    if (selected) {
      setProducts([selected, ...products]);
    }
  };

  const onRemoveClick = (index: number) => () => {
    const prod = products.filter((_, i) => i !== index);
    setProducts(prod);
  };

  return (
    <div className={styles.container}>
      <TodoPicker
        products={menus}
        onHandleChange={onHandleChange}
        selected={JSON.stringify(selected)}
      />
      <button onClick={onHandleClick}>add</button>
      <p className={styles.error}>
        {products.length <= 0 && "Shopping cart is empty"}
      </p>
      <ul className={styles.list}>
        {products.map((product, i) => (
          <TodoItem
            key={i}
            product={product}
            onRemoveClicked={onRemoveClick(i)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
