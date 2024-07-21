import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { motion, MotionProps } from 'framer-motion';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

type CombinedProps = ButtonProps & MotionProps;

export function Button({ children, variant = 'primary', ...props }: CombinedProps) {
  const buttonClass = classNames(styles.button, {
    [styles.secondary]: variant === 'secondary',
  });

  return (
    <motion.button
      className={buttonClass}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
