import * as yup from 'yup';

export const getLabel = (param: any, conjunction: string = 'は') => {
  return param.label ? param.label + conjunction : '';
};

const yupConfig: yup.LocaleObject = {
  string: {
    min: (param) =>
      getLabel(param.label) + `${param.min}文字以上で入力してください。`,
    max: (param) =>
      getLabel(param.label) + `${param.max}文字以下までしか入力できません。`,
    matches: (param) => getLabel(param.label) + '入力内容が正しくありません。',
    email: (param) =>
      getLabel(param.label) + 'メールアドレスを入力してください。',
    url: (param) => getLabel(param.label) + 'URLではありません。',
  },
  number: {
    min: (param) =>
      getLabel(param.label) + `${param.min}以上の数字を入力してください。`,
    max: (param) =>
      getLabel(param.label) + `${param.max}以下の数字を入力してください。`,
    positive: (param) =>
      getLabel(param.label) + 'マイナスの数字は入力できません。',
    negative: (param) =>
      getLabel(param.label) + 'プラスの数字は入力できません。',
    integer: (param) => getLabel(param.label) + '小数点は使えません。',
  },
  date: {
    min: (param) =>
      getLabel(param.label) + `${param.min}以降の日付を入力してください。`,
    max: (param) =>
      getLabel(param.label) + `${param.max}以前の日付を入力してください。`,
  },
  boolean: {
    isValue: (param) => getLabel(param.label) + `入力内容が正しくありません。`,
  },
  array: {
    min: (param) =>
      getLabel(param.label) + `${param.min}個以上で選んでください。`,
    max: (param) =>
      getLabel(param.label) + `${param.max}個以下で選んでください。`,
  },
};

export default yupConfig;
