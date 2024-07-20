import Image from 'next/image';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="start soft logo" width={101} height={38} />

      <div className={styles.shoppingCart}>
        <Image src="/bar.svg" alt="shopping cart icon" width={33} height={33} />
        <p>1</p>
      </div>
    </header>
  );
}
