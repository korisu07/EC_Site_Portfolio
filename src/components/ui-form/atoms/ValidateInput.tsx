'use client';

import styles from '@/styles/components/Form.module.scss';
import classNames from 'classnames';
import { HTMLInputTypeAttribute } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  customErrMessage?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
}

const ValidateInput: React.FC<Props> = ({
  type,
  name,
  label,
  defaultValue = '',
  placeholder = '',
  customErrMessage,
  labelClassName,
  inputClassName,
  disabled = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // const error = errors[name];
  const errMessage = customErrMessage;
  // ||
  // (typeof error?.type == 'string' && getErrorMessages(error.type, [label]));

  return (
    <>
      <label
        className={classNames(styles.label, labelClassName)}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        className={classNames(styles.input, inputClassName)}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
      />
      <div>{errMessage || ''}</div>
    </>
  );
};

export default ValidateInput;
