import React from "react";

export interface Product {
  item: string;
  price: number;
}

interface IProps {
  selected: string;
  products: Product[];
  onHandleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TodoPicker = ({ products, onHandleChange, selected }: IProps) => {
  return (
    <select value={selected} onChange={onHandleChange}>
      <option disabled selected value={""}>
        {" "}
        -- select an option --{" "}
      </option>

      {products.map((product, i) => (
        <option key={i} value={JSON.stringify(product)}>
          {product.item} ${product.price}
        </option>
      ))}
    </select>
  );
};

export default TodoPicker;
