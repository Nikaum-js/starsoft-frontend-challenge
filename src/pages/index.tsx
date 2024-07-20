import { Header } from "@/components/Header";
import { Product } from "@/components/Product";

import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />

        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />

        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />

        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />

        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />
        
        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />

        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />

        <Product 
          id={1}
          image="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="Backpack"
          description="Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
          price={182}
        />
      </div>
    </div>
  );
}
