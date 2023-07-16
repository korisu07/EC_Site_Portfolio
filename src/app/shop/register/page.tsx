'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import * as yup from 'yup';

import HalfCardFrame from '@/components/ui-parts/molecules/HalfCardFrame';
import styles from '@/styles/pages/Register.module.scss';

export default function Login() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    return console.log(data, 'OK!');
  };
  const onError: SubmitErrorHandler<FieldValues> = (err) => {
    return console.log(err, 'NG!');
  };

  const schema = yup
    .object({
      mail: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  return (
    <div className={styles.register}>
      <HalfCardFrame
        title="会員登録"
        titleClassName={styles.cardTitle}
        bodyClassName={styles.card}
      >
        <ValidateForm
          onSubmit={onSubmit}
          onError={onError}
          validateSchema={schema}
          btnText="登録"
        >
          <ValidateInput
            name="mail"
            label="メールアドレス"
            type="text"
            placeholder="半角英数字で入力してください"
            // validate={{
            //   required: true,
            //   maxLength: 80,
            // }}
          />

          <ValidateInput
            name="password"
            label="パスワード"
            type="password"
            placeholder="半角英数字で入力してください"
            // validate={{ required: true, maxLength: 80 }}
          />
        </ValidateForm>
      </HalfCardFrame>
    </div>
  );
}
