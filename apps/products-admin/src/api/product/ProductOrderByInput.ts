import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
