import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  status?: "available" | "sold";
};
