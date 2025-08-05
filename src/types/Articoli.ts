interface Articoli {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  //   launches: any[];
  //   events: any[];
}

interface ApiArticoli {
  results: Articoli[];
}

export default Articoli;
export { ApiArticoli };
