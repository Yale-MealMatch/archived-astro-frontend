export type FormRadioSelectOption = {
  label: string;
  subtitle?: string;
  right?: string;
};

export type Question = {
  type: 'radio' | 'input';
  name: string;
  label: string;
  description: string;
  options?: FormRadioSelectOption[];
  placeholder: string;
};
