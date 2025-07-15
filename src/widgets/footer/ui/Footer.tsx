import styles from './Footer.module.scss';
import type {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

}

export function Footer({ className, children, ...rest }: FooterProps) {
    return (
        <div className={cn(styles.root, className)} {...rest}>
            <div>
                {children}
            </div>
            <span>By Fleisar</span>
        </div>
    )
}
