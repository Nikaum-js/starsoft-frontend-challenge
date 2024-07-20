import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('/api/products?page=1&limit=20');
  return data.data;
};

const useProducts = (initialData: any) => {
  const options: UseQueryOptions<any, Error> = {
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialData: Array.isArray(initialData) ? initialData : [],
  };
  return useQuery(options);
};

export default useProducts;
