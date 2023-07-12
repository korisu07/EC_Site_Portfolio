'use client';

import { P } from '@/types/interface';
import {
  FieldValues,
  FormProvider,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface Props extends P {
  validate?: RegisterOptions<FieldValues, string>;
  btnText?: string;
  className?: string;
  disabled?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  onError?: SubmitErrorHandler<FieldValues>;
}

const ValidateForm: React.FC<Props> = ({
  children,
  btnText = '送信',
  className,
  disabled = false,
  onSubmit,
  onError,
}) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {children}
        <input
          className={className}
          type="submit"
          name={btnText}
          disabled={disabled}
        />
      </form>
    </FormProvider>
  );
};

export default ValidateForm;
