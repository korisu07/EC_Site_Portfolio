import { FieldValues } from 'react-hook-form';

export const getStringField = (data: FieldValues, name: string) => {
  return !!data[name] ? (data[name] as string) : '';
};

export const getNumberField = (data: FieldValues, name: string) => {
  return !isNaN(data[name]) ? (data[name] as number) : undefined;
};
