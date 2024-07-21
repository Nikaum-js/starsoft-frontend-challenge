import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ShoppingBackpack.module.scss';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';

export default function ShoppingBackpack() {
  const router = useRouter();

  const handleRedirectToHome = () => {
    router.push('/');
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
        <div className={styles.backpackItem}>
          <Image src="https://softstar.s3.amazonaws.com/items/backpack.png" alt="back button icon" width={161} height={161} />

          <div className={styles.backpackItemInfos}>
            <h3>ITEM 2</h3>

            <p>Redesigned from scratch and completely revised. Redesigned from scratch and completely revised.</p>

            <div className={styles.price}>
              <Image src="/eth.svg" alt="ethereum cryptocurrency logo" width={29} height={29} draggable="false" />

              <strong>32 ETH</strong>
            </div>

           <div className={styles.backpackItemActions}>
            <div className={styles.counter}>
              <div>
                <button>
                  <Minus />
                </button>

                <span>1</span>

                <button>
                  <Plus />
                </button>
              </div>
            </div>

            <motion.button
              className={styles.backpackItemRemove}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/trash.svg" alt="trash button icon" width={25} height={25} />
            </motion.button>
           </div>
          </div>
        </div>

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