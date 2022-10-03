/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

type FormRadioSelectProps = {
  options: Option[]
}

export type Option = {
  label: string;
  subtitle?: string;
  right?: string;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({options}: FormRadioSelectProps) {
  const [selected, setSelected] = useState();

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only"> Server size </RadioGroup.Label>
      <div className="space-y-4">
        {options.map((option) => (
          <RadioGroup.Option
            key={option.label}
            value={option}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-rose-500 ring-2 ring-rose-500' : '',
                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label as="span" className="font-medium text-gray-900">
                      {option.label}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500">
                      <span className="block sm:inline">
                        {option.subtitle}
                      </span>{' '}
                    </RadioGroup.Description>
                  </span>
                </span>
                <RadioGroup.Description
                  as="span"
                  className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right"
                >
                  <span className="font-medium text-gray-900">{option.right}</span>
                  <span className="ml-1 text-gray-500 sm:ml-0">/mo</span>
                </RadioGroup.Description>
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-rose-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
      <div>{}</div>
    </RadioGroup>
  );
}
