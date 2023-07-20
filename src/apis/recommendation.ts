import axios, { AxiosResponse } from 'axios';
import { getCacheByKey, setCacheByExpireTime } from '../utils/cache';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export class RecommendAPI {
  private static PATH_ISSUES = `/sick/`;

  static async getIssueList(keyword: string): Promise<any> {
    const cacheItem = await getCacheByKey(keyword);
    if (cacheItem) return cacheItem;
    console.info('calling api');
    const response: AxiosResponse = await axiosInstance.get(this.PATH_ISSUES, {
      params: {
        q: keyword,
      },
    });
    setCacheByExpireTime({ key: keyword, value: response.data, expireTime: 1000 * 60 * 5 });
    return response.data;
  }
}