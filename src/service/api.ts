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
  static async getAnimeGenre(genre: string) {
    try {
      const res = await apiClient.get(`${baseUrl}/anime?genre=${genre}`);

      return res.data;
    } catch (error: any) {
      console.log("Fail to fetch anime genre", error);
    }
  }
  static async getDetailAnime(slug: string) {
    try {
      const res = await apiClient.get(`${baseUrl}/anime/${slug}`);
      console.log("ini respon dari api:", res.data);
      return res.data;
    } catch (error: any) {
      console.log("Fail to fetch anime slug", error);
    }
  }
  static async getEpisodes(slug: string) {
    try {
      const res = await apiClient.get(`${baseUrl}/episode/${slug}`);
      return res.data;
    } catch (error: any) {
      console.log("Fail to fetch anime slug", error);
    }
  }
}

export default api;
