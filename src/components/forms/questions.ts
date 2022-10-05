import type { Question } from '~/types/form';
export const questions: Question[] = [
  {
    type: 'radio',
    name: 'year',
    label: 'What year are you?',
    description: '',
    options: [{ label: 'Freshman' }, { label: 'Sophomore' }, { label: 'Junior' }, { label: 'Senior' }],
  },
  {
    type: 'radio',
    name: 'pronouns',
    label: 'What are your pronouns?',
    description: '',
    options: [{ label: 'he/him' }, { label: 'she/her' }, { label: 'other' }],
  },
  {
    type: 'input',
    name: 'phone',
    label: 'What is your phone number?',
    description: null,
    placeholder: '1234567890',
  },
  {
    type: 'input',
    name: 'bio',
    label: 'What are your pronouns?',
    description: '',
    placeholder: '1234567890',
  },
];
