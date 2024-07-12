export interface Article {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface Response {
  results: Article[];
  total: number;
  total_pages: number;
}
