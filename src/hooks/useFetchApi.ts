import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { cache } from 'react';
import useSWR, { useSWRConfig } from 'swr';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const customAxios = axios.create({
  baseURL,
});

const getApi = async (url: string, params: ParsedUrlQuery = {}) => {
  return await customAxios
    .get(url, { params })
    .then((res) => {
      // 成功時の処理etc
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

const postApi = async (url: string, params: ParsedUrlQuery = {}) => {
  return await customAxios
    .post(url, { params })
    .then((res) => {
      // 成功時の処理etc
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

const api = {
  get: getApi,
  post: postApi,
};

export const fetchApiSSR = cache(
  async (
    path: string,
    action: 'get' | 'post' = 'get',
    params: ParsedUrlQuery = {},
  ) => {
    const url = '/api' + path;
    const fetcher = api[action];

    const res = await fetcher(url, params);
    console.log(res.data);
    return res.data;
  },
);

export const useFetchApi = (
  path: string,
  action: 'get' | 'post' = 'get',
  params: ParsedUrlQuery = {},
) => {
  const { cache } = useSWRConfig();
  const url = baseURL + '/api' + path;

  // 実行する関数を呼び出し
  const actionFunction = api[action];
  const fetcher = async () =>
    actionFunction(url, params).then((res) => res.data);

  // SWRの設定をセット
  const revalidationOptions = {
    revalidateOnMount: !cache.get(path), // cacheが残っている場合はMountしない
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  };

  // API実行
  const { data, error } = useSWR(url, fetcher, revalidationOptions);

  if (error) throw error;
  if (!data) return {};

  return data;
};
