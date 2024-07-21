import Image from 'next/image';
import styles from './Header.module.scss';
import { ShoppingBackpack } from '../ShoppingBackpack';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export function Header() {
  const itemsInBackpack = useSelector((state: RootState) => state.backpack.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="start soft logo" width={101} height={38} draggable="false" />

      <ShoppingBackpack itemsInBackpack={itemsInBackpack} />
    </header>
  );
}
