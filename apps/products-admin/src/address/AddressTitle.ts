import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "area";

export const AddressTitle = (record: TAddress): string => {
  return record.area?.toString() || String(record.id);
};
