import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const customAxios = axios.create({
  baseURL,
});

export const getApi = async <T>(path: string, params: ParsedUrlQuery = {}) => {
  const url = '/api' + path;
  return await customAxios
    .get(url, { params })
    // 成功時
    .then((res) => {
      return { err: null, result: true, data: res.data as T };
    })
    // 失敗時
    .catch((err) => {
      return { err, result: false, data: null };
    });
};

export const postApi = async <T>(path: string, data: T) => {
  const url = '/api' + path;
  return await customAxios
    .post(url, { data: JSON.stringify(data) })
    // 成功時
    .then((res) => {
      return { err: null, result: true, data: res.data };
    })
    // 失敗時
    .catch((err) => {
      return { err, result: false, data: null };
    });
};

export default customAxios;
