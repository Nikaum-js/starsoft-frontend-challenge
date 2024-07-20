import { api } from '@/lib/axios';
import { Product, ProductsResponse } from '@/types/product';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const fetchProducts = async (): Promise<Product[]> => {
  const { data }: AxiosResponse<ProductsResponse> = await api.get('/products?page=1&limit=20');
  return data.data;
};

export const  useProducts = (initialData: Product[]): UseQueryResult<Product[], Error> => {
  const options: UseQueryOptions<Product[], Error> = {
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialData: Array.isArray(initialData) ? initialData : [],
  };
  return useQuery(options);
};
