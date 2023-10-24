import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
