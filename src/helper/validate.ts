import * as yup from 'yup';

const getRequired = (param: any) => {
  return param.label ? `${param.label}は必須項目です。` : '必須項目です。';
};

const getOneOf = (param: any) => {
  return param.label ? `${param.label}が一致しません。` : 'が一致しません。';
};

export const loginSchema = yup
  .object({
    mail: yup.string().label('メールアドレス').max(80).required(getRequired),
    password: yup.string().label('パスワード').max(20).required(getRequired),
  })
  .required();

export const registerSchema = yup
  .object({
    mail: yup
      .string()
      .label('メールアドレス')
      .max(80)
      .email()
      .required(getRequired),
    password: yup.string().label('パスワード').max(20).required(getRequired),
    confirmPassword: yup
      .string()
      .label('パスワード(確認用)')
      .oneOf([yup.ref('password')], getOneOf)
      .required(getRequired),
  })
  .required();
