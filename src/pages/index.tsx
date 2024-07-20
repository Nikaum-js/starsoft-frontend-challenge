import { GetServerSideProps } from 'next';
import { Header } from "@/components/Header";
import { Product } from "@/components/Product";
import useProducts from '../hooks/useProducts';
import styles from './Home.module.scss';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20');
  return {
    props: {
      initialProducts: data.data,
    },
  };
};

const Home = ({ initialProducts }: { initialProducts: any }) => {
  const { data: products, isLoading, error } = useProducts(initialProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  console.log(products);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        {Array.isArray(products) && products.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
