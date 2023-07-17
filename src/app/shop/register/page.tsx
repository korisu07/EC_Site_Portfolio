'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';

import { FieldValues, SubmitHandler } from 'react-hook-form';

import HalfCardFrame from '@/components/ui-parts/molecules/HalfCardFrame';
import { getStringField } from '@/helper/submit';
import { registerSchema } from '@/helper/validate';
import { AccountIface } from '@/types/accountIface';
import { useEffect, useState } from 'react';

export default function Login() {
  const [data, setData] = useState<AccountIface>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setData({
      name: getStringField(data, 'name'),
      email: getStringField(data, 'email'),
      password: getStringField(data, 'newPassword'),
    });
  };

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  return (
    <div>
      <HalfCardFrame title="会員登録">
        <ValidateForm
          onSubmit={onSubmit}
          validateSchema={registerSchema}
          btnText="登録"
        >
          <ValidateInput
            name="name"
            label="氏名"
            type="text"
            autoComplete="name"
            placeholder="氏名を入力してください"
            enterKeyHint="next"
          />

          <ValidateInput
            name="email"
            label="メールアドレス"
            type="email"
            autoComplete="email"
            placeholder="半角英数字で入力してください"
            enterKeyHint="next"
          />

          <ValidateInput
            name="newPassword"
            label="パスワード"
            type="password"
            autoComplete="new-password"
            placeholder="半角英数字で入力してください"
            enterKeyHint="next"
          />

          <ValidateInput
            name="confirmPassword"
            label="パスワード(確認用)"
            type="password"
            placeholder="もう一度入力してください"
            enterKeyHint="send"
          />
        </ValidateForm>
      </HalfCardFrame>
    </div>
  );
}
