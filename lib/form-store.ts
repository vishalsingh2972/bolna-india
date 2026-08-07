export type FormState = {
  full_name: string;
  phone_number: string;
  district: string;
  new_address: string;
};

let formState: FormState = {
  full_name: "",
  phone_number: "",
  district: "",
  new_address: "",
};

export function updateFormField(
  field: keyof FormState,
  value: string
) {
  formState = {
    ...formState,
    [field]: value,
  };
}

export function getFormState() {
  return formState;
}

export function resetFormState() {
  formState = {
    full_name: "",
    phone_number: "",
    district: "",
    new_address: "",
  };
}