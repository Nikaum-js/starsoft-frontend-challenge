import { api } from '@/lib/axios';
import { Product, ProductsResponse } from '@/types/product';
import { QueryFunctionContext, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const fetchProducts = async ({ queryKey }: QueryFunctionContext): Promise<ProductsResponse> => {
  const [_key, page, limit] = queryKey;

  const { data }: AxiosResponse<ProductsResponse> = await api.get(`/products?page=${page}&limit=${limit}`);
  return data;
};

export const useProducts = (page: number, limit: number, initialData: Product[], initialDataUpdatedAt?: number): UseQueryResult<ProductsResponse, Error> => {
  const options: UseQueryOptions<ProductsResponse, Error> = {
    queryKey: ['products', page, limit],
    queryFn: fetchProducts,
    initialData: page === 1 ? { data: initialData, metadata: { page: 1, limit, count: initialData.length, pageCount: Math.ceil(initialData.length / limit), hasNextPage: initialData.length >= limit, hasPreviousPage: false } } : undefined,
    // staleTime: 1000 * 60 * 5, // 5 minutes
    initialDataUpdatedAt,
  };
  return useQuery(options);
};
