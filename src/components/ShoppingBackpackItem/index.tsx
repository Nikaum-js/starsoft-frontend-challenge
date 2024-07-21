import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ShoppingBackpackItem.module.scss';
import { Minus, Plus } from 'lucide-react';

interface ShoppingBackpackItemProps {
  imageSrc: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export function ShoppingBackpackItem({
  imageSrc,
  name,
  description,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}: ShoppingBackpackItemProps) {
  return (
    <motion.div
      className={styles.backpackItem}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Image src={imageSrc} alt={name} width={161} height={161} />

      <div className={styles.backpackItemInfos}>
        <h3>{name}</h3>

        <p>{description}</p>

        <div className={styles.price}>
          <Image src="/eth.svg" alt="ethereum cryptocurrency logo" width={29} height={29} draggable="false" />
          <strong>{price} ETH</strong>
        </div>

        <div className={styles.backpackItemActions}>
          <div className={styles.counter}>
            <div>
              <button onClick={onDecrement}>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button onClick={onIncrement}>
                <Plus />
              </button>
            </div>
          </div>

          <motion.button
            className={styles.backpackItemRemove}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRemove}
          >
            <Image src="/trash.svg" alt="trash button icon" width={25} height={25} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
