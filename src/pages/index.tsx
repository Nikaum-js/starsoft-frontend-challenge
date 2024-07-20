import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Product as ProductComponent } from "@/components/Product";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import styles from './Home.module.scss';
import { Product, ProductsResponse } from '@/types/product';
import { useProducts } from '@/hooks/useProducts';
import { AxiosResponse } from 'axios';
import { api } from '@/lib/axios';
import { Button } from '@/components/Button';

const initialLimit = 12;

export default function Home({ initialProducts, initialDataUpdatedAt }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>(initialProducts);
  const [hasNextPage, setHasNextPage] = useState(true);

  const { data: productsData, isLoading, error } = useProducts(page, initialLimit, initialProducts, initialDataUpdatedAt);

  useEffect(() => {
    if (page === 1) return;
    if (productsData) {
      setAllProducts(prevProducts => [...prevProducts, ...productsData.data]);
      setHasNextPage(productsData.metadata.hasNextPage);
    }
  }, [productsData, page]);

  const handleLoadMore = () => {
    if (hasNextPage) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        {Array.isArray(allProducts) && allProducts.map((product: Product) => (
          <ProductComponent
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        hasNextPage && (
          <div className={styles.buttonMoreItems}>
            <Button variant='secondary' onClick={handleLoadMore}>
              Carregar mais
            </Button>
          </div>
        )
      )}

      <span>STARSOFT © TODOS OS DIREITOS RESERVADOS</span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{ initialProducts: Product[], initialDataUpdatedAt: number }> = async () => {
  const { data }: AxiosResponse<ProductsResponse> = await api.get('/products?page=1&limit=12');
  return {
    props: {
      initialProducts: data.data,
      initialDataUpdatedAt: Date.now(),
    },
  };
};
