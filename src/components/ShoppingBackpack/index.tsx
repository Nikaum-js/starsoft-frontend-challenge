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
    <button className={styles.shoppingCBackpack} onClick={handleRedirectToShoppingBackpack}>
      <Image src="/bar.svg" alt="shopping Backpack icon" width={33} height={33} />
      <p>{itemsInBackpack}</p>
    </button>
  );
}