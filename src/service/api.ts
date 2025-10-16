import apiClient from "./apiClient";

const baseUrl = "https://backend.ryzendesu.vip";

class api {
  static async getAllAnime(params: string, page: number) {
    try {
      const res = await apiClient.get(
        `${baseUrl}/anime?type=${params}&page=${page}`
      );

      return res.data;
    } catch (error: any) {
      console.log("Fail to fetch anime ongoing", error);
    }
  }
  static async getGenre() {
    try {
      const res = await apiClient.get(`${baseUrl}/genre`);

      return res.data;
    } catch (error: any) {
      console.log("Fail to fetch anime genre", error);
    }
  }
  static async getDetailAnime(params: string) {
    try {
      const res = await apiClient.get(`${baseUrl}/anime?slug=${params}`);

      return res.data;
    } catch (error: any) {
      console.log("Fail to fetch anime slug", error);
    }
  }
}

export default api;
