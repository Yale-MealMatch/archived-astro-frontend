export type FormRadioSelectOption = {
  label: string;
  subtitle?: string;
  right?: string;
};

type FormRadio = {
  type: 'radio';
  name: string;
  label: string;
  description: string;
  options?: FormRadioSelectOption[];
}

type FormInput = 
{
  type: 'input';
  name: string;
  label: string;
  description: string;
  placeholder: string;
}


export type Question = FormRadio | FormInput;
