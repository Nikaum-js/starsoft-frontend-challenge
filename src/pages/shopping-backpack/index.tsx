import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ShoppingBackpack.module.scss';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';
import { ShoppingBackpackItem } from '@/components/ShoppingBackpackItem';

export default function ShoppingBackpack() {
  const router = useRouter();

  const handleRedirectToHome = () => {
    router.push('/');
  };

  const handleIncrement = () => {
  };

  const handleDecrement = () => {
  };

  const handleRemove = () => {
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <motion.button
          onClick={handleRedirectToHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src="/arrow-left.svg" alt="back button icon" width={33} height={33} />
        </motion.button>

        <h2>Mochila de Compras</h2>
      </div>

      <div className={styles.content}>
        <ShoppingBackpackItem
          imageSrc="https://softstar.s3.amazonaws.com/items/backpack.png"
          name="ITEM 2"
          description="Redesigned from scratch and completely revised. Redesigned from scratch and completely revised."
          price={32}
          quantity={1}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onRemove={handleRemove}
        />

        <div className={styles.total}>
          <strong>TOTAL</strong>

          <div className={styles.price}>
              <Image src="/eth.svg" alt="ethereum cryptocurrency logo" width={29} height={29} draggable="false" />

              <strong>32 ETH</strong>
            </div>
        </div>

        <Button>
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  );
}