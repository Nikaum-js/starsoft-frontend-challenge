import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const buttonClass = classNames(styles.button, {
    [styles.secondary]: variant === 'secondary',
  });

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
