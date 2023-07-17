import { getLabel } from '@/helper/lib/yup.locale';
import * as yup from 'yup';

const getRequired = (param: any) => {
  return getLabel(param) + '必須項目です。';
};

const getOneOf = (param: any) => {
  return getLabel(param, 'が') + '一致しません。';
};

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .label('メールアドレス')
      .required(getRequired)
      .email()
      .max(80),
    currentPassword: yup
      .string()
      .label('パスワード')
      .required(getRequired)
      .max(20),
  })
  .required();

export const registerSchema = yup
  .object({
    userName: yup.string().label('氏名').required(getRequired).max(80),
    email: yup
      .string()
      .label('メールアドレス')
      .required(getRequired)
      .max(80)
      .email(),
    newPassword: yup
      .string()
      .label('パスワード')
      .required(getRequired)
      .isPassword()
      .isRange(8, 20),
    confirmPassword: yup
      .string()
      .label('パスワード(確認用)')
      .required(getRequired)
      .isPassword()
      .oneOf([yup.ref('newPassword')], getOneOf),
  })
  .required();
