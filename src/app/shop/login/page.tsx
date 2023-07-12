'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';
import { Card, CardBody } from '@chakra-ui/react';

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
          <ValidateForm onSubmit={onSubmit} onError={onError}>
            <ValidateInput
              name="mail"
              type="text"
              placeholder="メールアドレス"
              validate={{
                required: true,
                maxLength: 80,
              }}
            />

            <ValidateInput
              name="password"
              type="password"
              placeholder="パスワード"
              validate={{ required: true, maxLength: 80 }}
            />
          </ValidateForm>
        </CardBody>
      </Card>
    </>
  );
}
