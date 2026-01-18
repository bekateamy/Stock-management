import { requireAuth, logout } from "./auth.js";
import { renderProducts } from "./ui.js";

await requireAuth();

// Sections
const sections = {
  products: document.getElementById("products"),
  sales: document.getElementById("sales")
};

// Show section function
function showSection(name) {
  Object.values(sections).forEach(s => s.hidden = true);
  sections[name].hidden = false;
}

// Button bindings
document.getElementById("btnProducts").addEventListener("click", async () => {
  showSection("products");
  await renderProducts();
});

document.getElementById("btnSales").addEventListener("click", () => {
  showSection("sales");
});

document.getElementById("btnLogout").addEventListener("click", logout);

// Default view
showSection("products");
await renderProducts();
