import { getProducts, addProduct } from "./products.js";

export async function renderProducts() {
  const products = await getProducts();
  const el = document.getElementById("products");

  el.innerHTML = `
    <h2>Products</h2>
    <input id="pname" placeholder="Product name">
    <button id="add">Add</button>
    <table>
      ${products.map(p => `<tr><td>${p.name}</td></tr>`).join("")}
    </table>
  `;

  add.onclick = async () => {
    await addProduct(pname.value);
    renderProducts();
  };
}
