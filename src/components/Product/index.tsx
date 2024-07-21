import Image from "next/image";
import { useAppDispatch } from "@/store";
import styles from './Product.module.scss';
import { Button } from "../Button";
import { addItemToBackpack } from "@/store/slices/backpackSlice";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export function Product({ id, image, description, price, name }: ProductProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToBackpack({ id, image, description, price, name }));
  };

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

      <Button onClick={handleAddToCart}>
        Comprar
      </Button>
    </div>
  );
}
