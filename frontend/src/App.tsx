import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const refresh = () => setRefreshKey((old) => old + 1);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MiniShop Admin Panel</h1>
      <ProductForm onAdd={refresh} />
      <hr />
      <ProductList key={refreshKey} />
    </div>
  );
}

export default App;
