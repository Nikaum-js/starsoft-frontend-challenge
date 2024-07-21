import Image from 'next/image';
import styles from './ShoppingBackpack.module.scss';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/Button';

export default function ShoppingBackpack() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>
          <Image src="/arrow-left.svg" alt="back button icon" width={33} height={33} />
        </button>

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

            <button className={styles.backpackItemRemove}>
              <Image src="/trash.svg" alt="trash button icon" width={25} height={25} />
            </button>
           </div>
          </div>
        </div>

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

            <button className={styles.backpackItemRemove}>
              <Image src="/trash.svg" alt="trash button icon" width={25} height={25} />
            </button>
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