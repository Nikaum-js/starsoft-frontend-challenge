import Image from "next/image";

import styles from './Product.module.scss';
import { Button } from "../Button";

interface ProductProps {
  id: number
  image: string
  name: string
  description: string
  price: number
}

export function Product({ image, description, price, name }: ProductProps) {
  return (
    <div className={styles.product}>
      <div className={styles.containerImage}>
        <Image src={image} alt={name} width={296} height={258} priority draggable="false" />
      </div>

      <div className={styles.productInfo}>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.price}>
          <Image src="/eth.svg" alt="ethereum cryptocurrency logo" width={29} height={29} draggable="false" />

          <strong>{price} ETH</strong>
        </div>
      </div>

      <Button>
        Comprar
      </Button>
    </div>
  );
}