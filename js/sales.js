import { supabase } from "./supabase.js";
import { getAvailableBatches } from "./batches.js";

export async function makeSale(product_id, sell_qty, price) {
  const batches = await getAvailableBatches(product_id);
  let remaining = sell_qty;
  let total_cost = 0;

  for (const batch of batches) {
    if (remaining <= 0) break;

    const used = Math.min(batch.quantity, remaining);
    remaining -= used;
    total_cost += used * batch.unit_cost;

    await supabase
      .from("batches")
      .update({ quantity: batch.quantity - used })
      .eq("id", batch.id);
  }

  if (remaining > 0) throw new Error("Insufficient stock");

  await supabase.from("sales").insert({
    product_id,
    quantity: sell_qty,
    total_price: price,
    total_cost
  });
}
