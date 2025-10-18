type downloadReso = {
  href: string;
  nama: string;
};

type download = {
  d360pmp4: downloadReso[];
  d480pmkv: downloadReso[];
  d480pmp4: downloadReso[];
  d720pmkv: downloadReso[];
  d720pmp4: downloadReso[];
  d1080pmkv: downloadReso[];
  d1080pmp4: downloadReso[];
};

type resolution = {
  m360p: { name: string; content: string };
  m480p: { name: string; content: string };
  m720p: { name: string; content: string };
};

export type streamTypes = {
  download: download[];
  iframe: string;
  judul: string;
  mirror: resolution[];
};
