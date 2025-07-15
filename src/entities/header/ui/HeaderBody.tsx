import type {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";
import styles from "./HeaderBody.module.scss";

interface HeaderBodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export function HeaderBody({ className, children }: HeaderBodyProps) {
    return (
        <header className={cn(styles.root, className)}>
            {children}
        </header>
    );
}
