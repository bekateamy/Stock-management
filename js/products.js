import { supabase } from "./supabase.js";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at");

  if (error) throw error;
  return data;
}

export async function addProduct(name) {
  const { error } = await supabase
    .from("products")
    .insert({ name });

  if (error) throw error;
}
