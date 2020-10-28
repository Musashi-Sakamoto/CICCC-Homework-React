import React from "react";
import { Product } from "../TodoPicker";

interface IProps {
  product: Product;
}

const TodoItem = ({ product }: IProps) => {
  return (
    <li>
      {product.item} : ${product.price}
    </li>
  );
};

export default TodoItem;
