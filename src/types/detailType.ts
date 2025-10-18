import type { episodeType } from "./episode";

export type lengkapType = {
  judul: string;
  slug: string;
  tanggal: string;
};

export type detailAnimeType = {
  batch: lengkapType[];
  gambar: string;
  genre: string;
  judul: string;
  nama: string;
  durasi: string;
  namaJepang: string;
  produser: string;
  rilis: string;
  skor: string;
  status: string;
  studio: string;
  tipe: string;
  totalEpisode: string;
  lengkap: lengkapType[];
  episode: episodeType[];
};
