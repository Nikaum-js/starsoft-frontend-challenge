import Image from 'next/image';
import styles from './Header.module.scss';
import { ShoppingBackpack } from '../ShoppingBackpack';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="start soft logo" width={101} height={38} draggable="false" />

      <ShoppingBackpack itemsInBackpack={1} />
    </header>
  );
}
