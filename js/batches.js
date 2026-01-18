import { supabase } from "./supabase.js";

export async function addBatch(product_id, quantity, unit_cost) {
  const { error } = await supabase
    .from("batches")
    .insert({ product_id, quantity, unit_cost });

  if (error) throw error;
}

export async function getAvailableBatches(product_id) {
  const { data, error } = await supabase
    .from("batches")
    .select("*")
    .eq("product_id", product_id)
    .gt("quantity", 0)
    .order("created_at");

  if (error) throw error;
  return data;
}
