export type Product = {
  createdAt: Date;
  id: string;
  image: string | null;
  name: string | null;
  status?: "available" | "sold" | null;
  updatedAt: Date;
};
