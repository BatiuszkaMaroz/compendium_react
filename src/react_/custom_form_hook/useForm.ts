/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */

import { useState, ChangeEvent } from 'react';

const useForm = <T extends object>({
  initialValues,
  validators,
}: {
  initialValues: T;
  validators?: { [K in keyof T | string]?: (val: string) => boolean };
}) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string }>({});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setValues((values) => ({ ...values, [id]: value }));

    if (validators && validators[id]) {
      const result = validators[id]?.(value);

      if (!result) {
        setErrors((errors) => ({ ...errors, [id]: 'invalid input' }));
      } else {
        setErrors((errors) => ({ ...errors, [id]: undefined }));
      }
    }
  };

  return { onChange, values, errors };
};

export default useForm;
