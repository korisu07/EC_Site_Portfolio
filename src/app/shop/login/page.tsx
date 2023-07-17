'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';
import { Card, CardBody } from '@chakra-ui/react';

import { loginSchema } from '@/helper/validate';
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

export default function Login() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    return console.log(data, 'OK!');
  };
  const onError: SubmitErrorHandler<FieldValues> = (err) => {
    return console.log(err, 'NG!');
  };

  return (
    <>
      <Card>
        <CardBody>
          <ValidateForm
            onSubmit={onSubmit}
            onError={onError}
            validateSchema={loginSchema}
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
          </ValidateForm>
        </CardBody>
      </Card>
    </>
  );
}
