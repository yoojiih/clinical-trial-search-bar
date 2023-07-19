import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export class RecommendAPI {
  private static PATH_ISSUES = `/sick/`;

  static async getIssueList(keyword: string): Promise<any> {
    console.info('calling api');
    const result: AxiosResponse = await axiosInstance.get(this.PATH_ISSUES, {
      params: {
        q: keyword,
      },
    });

    return result.data;
  }
}

// const fetchRecommend = async () => {
//     console.log("dlrj")
//     let response;

//     try {
//       const response = await RecommendAPI.getIssueList("B");
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   };
