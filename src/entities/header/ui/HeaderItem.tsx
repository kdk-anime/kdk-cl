import {type ButtonHTMLAttributes, type DetailedHTMLProps, useEffect, useRef} from "react";
import cn from "classnames";
import styles from './HeaderItem.module.scss';

interface HeaderItemProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export function HeaderItem({ className, children, ...rest }: HeaderItemProps) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = ref.current;
        const handler = (e: PointerEvent) => {
            const rect = button!.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            button?.style.setProperty('--offsetX', `${offsetX}px`);
            button?.style.setProperty('--offsetY', `${offsetY}px`);
        };

        button?.addEventListener('pointermove', handler);

        return () => {
            button?.removeEventListener('pointermove', handler);
        }
    }, []);

    return (
        <button
            ref={ref}
            className={cn(styles.root, className)}
            {...rest}
        >
            {children}
        </button>
    )
}
