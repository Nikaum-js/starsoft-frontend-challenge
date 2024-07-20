import Image from "next/image";
import styles from './ShoppingCart.module.scss';

interface ShoppingCartProps {
  itemsInCart: number
}

export function ShoppingCart({ itemsInCart }: ShoppingCartProps) {
  return (
    <button className={styles.shoppingCart}>
      <Image src="/bar.svg" alt="shopping cart icon" width={33} height={33} />
      <p>{itemsInCart}</p>
    </button>
  );
}