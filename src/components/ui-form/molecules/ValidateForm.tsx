'use client';

import styles from '@/styles/components/Form.module.scss';
import { P } from '@/types/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { AnyObject, ObjectSchema } from 'yup';

interface Props extends P {
  validateSchema: ObjectSchema<FieldValues, AnyObject, any, ''>;
  btnText?: string;
  btnClassName?: string;
  disabled?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  onError?: SubmitErrorHandler<FieldValues>;
}

const ValidateForm: React.FC<Props> = ({
  children,
  validateSchema,
  btnText = '送信',
  btnClassName,
  disabled = false,
  onSubmit,
  onError,
}) => {
  const methods = useForm({
    resolver: yupResolver(validateSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        {children}
        <input
          className={classNames(styles.submit, btnClassName)}
          type="submit"
          value={btnText}
          disabled={disabled}
        />
      </form>
    </FormProvider>
  );
};

export default ValidateForm;
