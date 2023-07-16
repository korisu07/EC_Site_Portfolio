import * as yup from 'yup';

const labelText = (label: string | undefined) => {
  return label ? `${label}は` : '';
};

const config: yup.LocaleObject = {
  string: {
    min: (param) =>
      labelText(param.label) + `${param.min}文字以上で入力してください。`,
    max: (param) =>
      labelText(param.label) + `${param.max}文字以下までしか入力できません。`,
    matches: (param) => labelText(param.label) + '入力内容が正しくありません。',
    email: (param) => labelText(param.label) + 'メールアドレスではありません。',
    url: (param) => labelText(param.label) + 'URLではありません。',
  },
  number: {
    min: (param) =>
      labelText(param.label) + `${param.min}以上の数字を入力してください。`,
    max: (param) =>
      labelText(param.label) + `${param.max}以下の数字を入力してください。`,
    positive: (param) =>
      labelText(param.label) + 'マイナスの数字は入力できません。',
    negative: (param) =>
      labelText(param.label) + 'プラスの数字は入力できません。',
    integer: (param) => labelText(param.label) + '小数点は使えません。',
  },
  date: {
    min: (param) =>
      labelText(param.label) + `${param.min}以降の日付を入力してください。`,
    max: (param) =>
      labelText(param.label) + `${param.max}以前の日付を入力してください。`,
  },
  boolean: {
    isValue: (param) => labelText(param.label) + `入力内容が正しくありません。`,
  },
  array: {
    min: (param) =>
      labelText(param.label) + `${param.min}個以上で選んでください。`,
    max: (param) =>
      labelText(param.label) + `${param.max}個以下で選んでください。`,
  },
};

yup.setLocale(config);
export default yup;
