'use client';

import styles from '@/styles/components/Form.module.scss';
import classNames from 'classnames';
import { HTMLInputTypeAttribute, useEffect, useState } from 'react';
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
  autoComplete?: string;
  inputMode?: NonNullable<JSX.IntrinsicElements['input']['inputMode']>;
  enterKeyHint?: NonNullable<JSX.IntrinsicElements['input']['enterKeyHint']>;
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
  autoComplete = 'off',
  inputMode,
  enterKeyHint,
}) => {
  const [validClass, setValidClass] = useState<string>('');
  const [errMessage, setErrMessage] = useState<string>('');

  const {
    register,
    trigger,
    formState: { isSubmitted },
    getFieldState,
    getValues,
  } = useFormContext();

  const fieldState = getFieldState(name);
  const fieldValues = getValues(name);

  useEffect(() => {
    if (!name) return;
    const errMessage = customErrMessage || fieldState.error?.message || '';
    setErrMessage(errMessage);
  }, [fieldState]);

  useEffect(() => {
    if (!isSubmitted) return;

    trigger(name);
  }, [fieldValues]);

  useEffect(() => {
    if (!isSubmitted) return;

    const className = fieldState.invalid ? styles.invalid : styles.valid;
    setValidClass(className);
  }, [isSubmitted, fieldState]);

  return (
    <>
      <label
        className={classNames(styles.label, labelClassName)}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        inputMode={inputMode}
        id={name}
        className={classNames(styles.input, validClass, inputClassName)}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        enterKeyHint={enterKeyHint}
        {...register(name)}
      />
      <small className={classNames(styles.errMessage, inputClassName)}>
        {errMessage || '　'}
      </small>
    </>
  );
};

export default ValidateInput;
