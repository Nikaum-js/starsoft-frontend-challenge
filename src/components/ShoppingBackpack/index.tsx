import Image from "next/image";
import styles from './ShoppingBackpack.module.scss';
import { useRouter } from "next/router";

interface ShoppingBackpackProps {
  itemsInBackpack: number
}

export function ShoppingBackpack({ itemsInBackpack }: ShoppingBackpackProps) {
  const router = useRouter();

  const handleRedirectToShoppingBackpack = () => {
    router.push('/shopping-backpack');
  };

  return (
    <button className={styles.shoppingBackpack} onClick={handleRedirectToShoppingBackpack}>
      <Image src="/bar.svg" alt="shopping Backpack icon" width={33} height={33} />
      <p data-cy="cart-count">{itemsInBackpack}</p>
    </button>
  );
}