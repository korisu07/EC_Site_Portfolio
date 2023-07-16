'use client';

import ValidateInput from '@/components/ui-form/atoms/ValidateInput';
import ValidateForm from '@/components/ui-form/molecules/ValidateForm';
import { Card, CardBody } from '@chakra-ui/react';
import * as yup from 'yup';

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

  const schema = yup
    .object({
      mail: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  return (
    <>
      <Card>
        <CardBody>
          <ValidateForm
            onSubmit={onSubmit}
            onError={onError}
            validateSchema={schema}
          >
            <ValidateInput
              name="mail"
              label="メールアドレス"
              type="text"
              placeholder="メールアドレス"
            />

            <ValidateInput
              name="password"
              label="パスワード"
              type="password"
              placeholder="パスワード"
            />
          </ValidateForm>
        </CardBody>
      </Card>
    </>
  );
}
