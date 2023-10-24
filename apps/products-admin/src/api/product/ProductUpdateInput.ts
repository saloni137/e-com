export type ProductUpdateInput = {
  image?: string | null;
  name?: string | null;
  status?: "available" | "sold" | null;
};
