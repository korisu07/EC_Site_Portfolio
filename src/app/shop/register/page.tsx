'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';

import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import HalfCardFrame from '@/components/ui-parts/molecules/HalfCardFrame';
import { registerSchema } from '@/helper/validate';

export default function Login() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    return console.log(data, 'OK!');
  };
  const onError: SubmitErrorHandler<FieldValues> = (err) => {
    return console.log(err, 'NG!');
  };

  return (
    <div>
      <HalfCardFrame title="会員登録">
        <ValidateForm
          onSubmit={onSubmit}
          onError={onError}
          validateSchema={registerSchema}
          btnText="登録"
        >
          <ValidateInput
            name="mail"
            label="メールアドレス"
            type="text"
            placeholder="半角英数字で入力してください"
          />

          <ValidateInput
            name="password"
            label="パスワード"
            type="password"
            placeholder="半角英数字で入力してください"
          />

          <ValidateInput
            name="confirmPassword"
            label="パスワード(確認用)"
            type="password"
            placeholder="もう一度入力してください"
          />
        </ValidateForm>
      </HalfCardFrame>
    </div>
  );
}
