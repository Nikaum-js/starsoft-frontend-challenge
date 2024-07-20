import { motion } from 'framer-motion';
import styles from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <motion.div
      className={styles.spinner}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: 'linear'
      }}
    />
  );
};
