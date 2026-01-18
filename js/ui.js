import { getProducts, addProduct } from "./products.js";

export async function renderProducts() {
  const el = document.getElementById("products");

  const products = await getProducts();

  el.innerHTML = `
    <h2>Products</h2>

    <div>
      <input id="pname" placeholder="Product name">
      <button id="addProduct">Add</button>
    </div>

    <table>
      <tr><th>Name</th></tr>
      ${products.map(p => `<tr><td>${p.name}</td></tr>`).join("")}
    </table>
  `;

  document.getElementById("addProduct").onclick = async () => {
    const name = document.getElementById("pname").value;
    if (!name) return alert("Enter product name");

    await addProduct(name);
    renderProducts();
  };
}
