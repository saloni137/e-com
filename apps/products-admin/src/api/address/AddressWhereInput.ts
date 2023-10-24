import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  area?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  landmark?: StringNullableFilter;
  state?: StringNullableFilter;
};
