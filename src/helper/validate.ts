import { LiteralUnion, RegisterOptions } from 'react-hook-form';

const errorMessages: ErrorIface = {
  required: '{0}は必須項目です。',
  min: '{0}の下限は{1}です。',
  max: '{0}の上限は{1}です',
  maxLength: '{0}は{1}文字以内で入力してください。',
  minLength: '{0}は{1}文字以上で入力してください。',
  validate: '',
  disabled: '',
  pattern: '',
  value: '',
  setValueAs: '',
  shouldUnregister: '',
  onChange: '',
  onBlur: '',
  deps: '',
  valueAsNumber: '',
  valueAsDate: '',
};

type ErrorIface = {
  [key in LiteralUnion<keyof RegisterOptions, string>]: string;
};

// エラーメッセージ取得
export const getErrorMessages = (
  errName?: LiteralUnion<keyof RegisterOptions, string>,
  arr?: string[],
) => {
  // エラー名がセットされていない場合は汎用メッセージ
  if (!errName) return '入力エラーです。';

  // エラー名からメッセージを取得
  let message = errorMessages[errName];
  // カスタム文字列がセットされていない場合
  if (!arr || !arr.length) {
    return message;
  } else {
    // カスタム文字列を当てはめる処理
    arr.map((text, i) => {
      const index = `{${i}}`;
      message = message.replace(index, text);
    });
    return message;
  }
};
