import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Header } from "@/components/Header";
import { Product as ProductComponent } from "@/components/Product";
import styles from './Home.module.scss';
import { Product, ProductsResponse } from '@/types/product';
import { useProducts } from '@/hooks/useProducts';
import { AxiosResponse } from 'axios';
import { api } from '@/lib/axios';
import { Button } from '@/components/Button';

export default function Home({ initialProducts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: products, isLoading, error } = useProducts(initialProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  console.log(products);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        {Array.isArray(products) && products.map((product: Product) => (
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

      <div className={styles.buttonMoreItems}>
        <Button variant='secondary'>
          Carregar mais
        </Button>
      </div>

      <strong>STARSOFT © TODOS OS DIREITOS RESERVADOS</strong>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ initialProducts: Product[] }> = async () => {
  const { data }: AxiosResponse<ProductsResponse> = await api.get('/products?page=1&limit=20');
  return {
    props: {
      initialProducts: data.data,
    },
  };
};