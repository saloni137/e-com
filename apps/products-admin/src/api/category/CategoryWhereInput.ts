import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
};
