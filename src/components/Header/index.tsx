import Image from 'next/image';
import styles from './Header.module.scss';
import { ShoppingCart } from '../ShoppingCart';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="start soft logo" width={101} height={38} draggable="false" />

      <ShoppingCart itemsInCart={1} />
    </header>
  );
}
