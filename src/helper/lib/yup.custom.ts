import yupConfig, { getLabel } from '@/helper/lib/yup.locale';
import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TDefault = undefined,
    TFlags extends yup.Flags = '',
    TOut extends TType = TType,
  > extends yup.Schema<TType, TContext, TOut> {
    isAlphabet(): StringSchema<TType, TContext>;
    isFullWidth(): StringSchema<TType, TContext>;
    isPassword(): StringSchema<TType, TContext>;
    isRange(min: number, max: number): StringSchema<TType, TContext>;
  }
}

// Yup カスタム設定
yup.setLocale(yupConfig);

// カスタムバリデーション
yup.addMethod<yup.StringSchema>(yup.string, 'isAlphabet', function () {
  return this.matches(
    /^[0-9a-zA-Z]*$/,
    (param) => getLabel(param) + '半角英数字のみ入力可能です。',
  );
});

yup.addMethod<yup.StringSchema>(yup.string, 'isFullWidth', function () {
  return this.matches(
    /^[^\x20-\x7e]*$/,
    (param) => getLabel(param) + '全角文字のみ入力可能です。',
  );
});

yup.addMethod<yup.StringSchema>(yup.string, 'isPassword', function () {
  return this.matches(
    /^[0-9a-zA-Z]*$/,
    (param) => getLabel(param) + '半角英数字のみ入力可能です。',
  );
});

yup.addMethod<yup.StringSchema>(
  yup.string,
  'isRange',
  function (min: number, max: number) {
    return this.test(
      '-global-is-range',
      (param: any) => `${min}文字以上${max}文字以内で入力してください。`,
      (value, testContext) => {
        // 未入力の場合はチェックOKに (必須チェックとメッセージを分けるため)
        if (!value || !value.length) return true;
        else return min <= value.length && max >= value.length;
      },
    );
  },
);
