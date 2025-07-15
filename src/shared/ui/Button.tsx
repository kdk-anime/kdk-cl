import {type DetailedHTMLProps, type ForwardedRef, forwardRef, type ButtonHTMLAttributes} from "react";
import cn from "classnames";
import styles from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function ButtonBase({ children, className, ...rest }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    return (
        <button ref={ref} className={cn(styles.root, className)} {...rest}>
            {children}
        </button>
    )
}

export const Button = forwardRef(ButtonBase);
