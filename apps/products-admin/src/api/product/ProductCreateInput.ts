export type ProductCreateInput = {
  image?: string | null;
  name?: string | null;
  status?: "available" | "sold" | null;
};
