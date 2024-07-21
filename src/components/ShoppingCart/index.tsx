import Image from "next/image";
import styles from './ShoppingCart.module.scss';
import { useRouter } from "next/router";

interface ShoppingCartProps {
  itemsInCart: number
}

export function ShoppingCart({ itemsInCart }: ShoppingCartProps) {
  const router = useRouter();

  const handleRedirectShoppingBackpack = () => {
    router.push('/shopping-backpack');
  };

  return (
    <button className={styles.shoppingCart} onClick={handleRedirectShoppingBackpack}>
      <Image src="/bar.svg" alt="shopping cart icon" width={33} height={33} />
      <p>{itemsInCart}</p>
    </button>
  );
}