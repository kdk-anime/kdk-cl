import {
    type ChangeEventHandler,
    type DetailedHTMLProps,
    type ForwardedRef,
    forwardRef,
    type InputHTMLAttributes,
    useCallback, useEffect, useState
} from "react";
import cn from "classnames";
import styles from "./Switch.module.scss";

interface SwitchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

function SwitchBase({ className, children, onChange, checked, disabled, ...rest }: SwitchProps, ref: ForwardedRef<HTMLInputElement>) {
    const [internalChecked, setChecked] = useState(checked ?? false);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(function (event) {
        onChange?.(event);
        setChecked(event.currentTarget.checked);
    }, [onChange]);

    useEffect(() => {
        if (checked != null) {
            setChecked(checked);
        }
    }, [checked]);

    return (
        <label
            role="switch"
            aria-checked={internalChecked}
            aria-disabled={disabled}
            className={styles.element}
        >
            <input
                ref={ref}
                type="checkbox"
                className={styles.input}
                onChange={onChangeHandler}
                disabled={disabled}
                checked={internalChecked}
                {...rest}
            />
            <div className={cn(className, styles.root)} />
            <span className={styles.content}>{children}</span>
        </label>
    )
}

export const Switch = forwardRef(SwitchBase);
