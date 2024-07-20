import { motion } from 'framer-motion';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  loaded: number;
  total: number;
}

export function ProgressBar({ loaded, total }: ProgressBarProps) {
  const progress = (loaded / total) * 100;

  return (
    <div className={styles.progressBarContainer}>
      <motion.div
        className={styles.progressBar}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};
