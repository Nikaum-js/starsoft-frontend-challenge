import { motion } from 'framer-motion';
import styles from './SkeletonProduct.module.scss';

export function SkeletonProduct() {
  return (
    <div className={styles.skeletonProduct}>
      <motion.div 
        className={styles.containerImage} 
        animate={{ opacity: [1, 0.5, 1] }} 
        transition={{ duration: 1, repeat: Infinity }} 
      />
      <div className={styles.productInfo}>
        <div>
          <motion.div 
            className={styles.name} 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1, repeat: Infinity }} 
          />
          <motion.div 
            className={styles.description} 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1, repeat: Infinity }} 
          />
        </div>
        <div className={styles.priceContainer}>
          <motion.div 
            className={styles.priceIcon} 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1, repeat: Infinity }} 
          />
          <motion.div 
            className={styles.price} 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1, repeat: Infinity }} 
          />
        </div>
      </div>
      <motion.div 
        className={styles.button} 
        animate={{ opacity: [1, 0.5, 1] }} 
        transition={{ duration: 1, repeat: Infinity }} 
      />
    </div>
  );
};
