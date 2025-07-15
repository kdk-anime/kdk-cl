import {type DetailedHTMLProps, forwardRef, type HTMLAttributes, type PropsWithChildren} from "react";
import type { MaterialIcon } from 'material-icons';
import cn from "classnames";

interface IconProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, keyof PropsWithChildren> {
    name: MaterialIcon;
}

function IconBase({ className, name, ...rest }: IconProps) {
    return (
        <span
            className={cn('material-icons', className)}
            aria-hidden
            {...rest}
        >
            {name}
        </span>
    );
}

export const Icon = forwardRef(IconBase);
