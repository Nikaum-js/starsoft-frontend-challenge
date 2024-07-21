export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  createdAt?: string;
}

export interface ProductsResponse {
  data: Product[];
  metadata: {
    page: number;
    limit: number;
    count: number;
    pageCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
