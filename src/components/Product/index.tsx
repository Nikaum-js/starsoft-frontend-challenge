import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store';
import styles from './Product.module.scss';
import { Button } from '../Button';
import { addItemToBackpack } from '@/store/slices/backpackSlice';

interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export function Product({ id, image, description, price, name }: ProductProps) {
  const dispatch = useAppDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItemToBackpack({ id, image, description, price, name }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <motion.div
      className={styles.product}
      initial={{ scale: 1 }}
      animate={isAdded ? { scale: 1.01 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
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

      <Button onClick={handleAddToCart} data-cy="add-to-cart">
        Comprar
      </Button>
    </motion.div>
  );
}
