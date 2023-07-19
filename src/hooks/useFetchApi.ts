import useSWR, { useSWRConfig } from 'swr';

export const useFetchApi = (path: string, fetcher: () => {}) => {
  const { cache } = useSWRConfig();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const url = baseURL + '/api' + path;

  // SWRの設定をセット
  const revalidationOptions = {
    revalidateOnMount: !cache.get(path), // cacheが残っている場合はMountしない
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  };

  // API実行
  const { data, error } = useSWR(url, async () => fetcher, revalidationOptions);

  if (error) throw error;
  if (!data) return {};

  return data;
};
