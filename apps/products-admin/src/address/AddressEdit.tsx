import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <TextInput label="city" source="city" />
        <TextInput label="landmark" source="landmark" />
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Edit>
  );
};
