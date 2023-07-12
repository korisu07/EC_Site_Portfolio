'use client';

import { getErrorMessages } from '@/helper/validate';
import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  validate?: RegisterOptions<FieldValues, string>;
  className?: string;
  disabled?: boolean;
}

const ValidateInput: React.FC<Props> = ({
  type,
  name,
  defaultValue = '',
  placeholder = '',
  validate,
  className,
  disabled = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <>
      <input
        className={className}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, validate)}
      />
      {typeof error?.type == 'string' && (
        <div>{getErrorMessages(error.type, [name])}</div>
      )}
    </>
  );
};

export default ValidateInput;
