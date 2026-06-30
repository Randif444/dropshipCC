import { supabase } from "@/lib/supabase";

export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products: ", error);
    throw new Error(error.message);
  }
  return data;
};

export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching products by id: ", error);
    throw new Error(error.message);
  }
  return data;
};

export const createProduct = async (productData) => {
  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        name: productData.name,
        niche: productData.niche,
        source: productData.source,
        url: productData.url,
        competitor_url: productData.competitor_url,
        profite_estimate: productData.profit_estimate,
        score: productData.score,
        status: productData.status,
        notes: productData.notes,
      },
    ])
    .select();

  if (error) {
    console.error("Error creating product: ", error);
    throw new Error(error.message);
  }
  return data[0];
};

export const updateProduct = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("products")
    .update({
      ...updatedData,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating product: ", error);
    throw new Error(error.message);
  }
  return data[0];
};

export const deleteProduct = async (id) => {
  const { data, error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error("Error delete product: ", error);
    throw new Error(error.message);
  }
  return true;
};
