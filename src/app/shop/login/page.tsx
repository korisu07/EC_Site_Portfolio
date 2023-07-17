'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';
import HalfCardFrame from '@/components/ui-parts/molecules/HalfCardFrame';
import { getStringField } from '@/helper/submit';

import { loginSchema } from '@/helper/validate';
import { LoginIface } from '@/types/accountIface';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export default function Login() {
  const [data, setData] = useState<LoginIface>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setData({
      email: getStringField(data, 'email'),
      password: getStringField(data, 'currentPassword'),
    });
  };

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  return (
    <HalfCardFrame title="ログイン">
      <ValidateForm
        onSubmit={onSubmit}
        validateSchema={loginSchema}
        btnText="ログイン"
      >
        <ValidateInput
          name="email"
          label="メールアドレス"
          type="email"
          autoComplete="email"
          placeholder="半角英数字で入力してください"
          enterKeyHint="next"
        />

        <ValidateInput
          name="currentPassword"
          label="パスワード"
          type="password"
          autoComplete="current-password"
          placeholder="半角英数字で入力してください"
          enterKeyHint="send"
        />
      </ValidateForm>
    </HalfCardFrame>
  );
}
