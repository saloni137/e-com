import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <TextInput label="city" source="city" />
        <TextInput label="landmark" source="landmark" />
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Create>
  );
};
