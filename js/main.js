import { requireAuth, logout } from "./auth.js";
import { renderProducts } from "./ui.js";

window.logout = logout;
window.show = (id) => {
  document.querySelectorAll("section").forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
};

await requireAuth();
await renderProducts();
