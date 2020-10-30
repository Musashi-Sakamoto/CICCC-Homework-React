import React from "react";
import { Product } from "../TodoPicker";

interface IProps {
  product: Product;
  onRemoveClicked: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const TodoItem = ({ product, onRemoveClicked }: IProps) => {
  return (
    <li>
      {product.item} : ${product.price}
      <button onClick={onRemoveClicked}>Remove</button>
    </li>
  );
};

export default TodoItem;
