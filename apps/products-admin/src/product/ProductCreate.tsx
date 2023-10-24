import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Available", value: "available" },
            { label: "Sold", value: "sold" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
