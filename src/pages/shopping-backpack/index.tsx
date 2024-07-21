import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import styles from './ShoppingBackpack.module.scss';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { ShoppingBackpackItem } from '@/components/ShoppingBackpackItem';
import { decrementItemQuantity, incrementItemQuantity, removeItemFromBackpack } from '@/store/slices/backpackSlice';

export default function ShoppingBackpack() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const backpackItems = useSelector((state: RootState) => state.backpack.items);

  const handleRedirectToHome = () => {
    router.push('/');
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementItemQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementItemQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeItemFromBackpack(id));
    toast.success('Item removido com sucesso');
  };

  const handleCheckout = () => {
    if (backpackItems.length === 0) {
      toast.error('Você não tem itens no carrinho');
      return;
    }
    toast.success('Compra finalizada com sucesso');
  };

  const total = backpackItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
        <AnimatePresence>
          {backpackItems.map((item: any) => (
            <ShoppingBackpackItem
              key={item.id}
              imageSrc={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </AnimatePresence>

        <div className={styles.total}>
          <strong>TOTAL</strong>

          <div className={styles.price}>
            <Image src="/eth.svg" alt="ethereum cryptocurrency logo" width={29} height={29} draggable="false" />
            <strong>{total} ETH</strong>
          </div>
        </div>

        <Button id={styles.checkoutButton} onClick={handleCheckout} data-cy="checkout">
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  );
}
