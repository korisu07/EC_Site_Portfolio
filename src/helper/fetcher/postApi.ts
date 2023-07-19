import { postApi } from '@/helper/fetcher/axios';
import { AccountIface } from '@/types/accountIface';

export const postRegister = async (data: AccountIface) => {
  const result = await postApi<AccountIface>('/account/register', data);
  return result;
};
