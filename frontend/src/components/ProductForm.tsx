import { useState } from "react";
import API from "../api";

interface ProductFormProps {
  onAdd: () => void;
}

interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

export default function ProductForm({ onAdd }: ProductFormProps) {
  const [form, setForm] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "price" || name === "stock" ? +value : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await API.post("/products", form);
    onAdd();
    setForm({ name: "", description: "", price: 0, stock: 0, category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      {["name", "description", "category"].map((field) => (
        <div key={field}>
          <input
            name={field}
            placeholder={field}
            value={form[field as keyof Product]}
            onChange={handleChange}
            required
          />
          <br />
        </div>
      ))}
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}
