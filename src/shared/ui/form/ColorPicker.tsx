import {
    type ChangeEvent,
    type CSSProperties,
    type DetailedHTMLProps,
    type ForwardedRef,
    forwardRef,
    type InputHTMLAttributes, useCallback, useEffect, useState
} from "react";
import styles from "./ColorPicker.module.scss";
import cn from "classnames";

interface ColorPickerProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {

}

function ColorPickerBase({
    children, className, onChange, value, disabled, ...rest
}: ColorPickerProps, ref: ForwardedRef<HTMLInputElement>) {
    const [internalValue, setInternalValue] = useState(value);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.currentTarget.value);
        onChange?.(e);
    }, [onChange]);

    useEffect(() => {
        if (value != null) {
            setInternalValue(value);
        }
    }, [value]);

    return (
        <label
            role="img"
            className={cn(styles.root, disabled && styles.disabled, className)}
            style={{
                '--value': internalValue,
            } as CSSProperties}
        >
            <input
                className={styles.input}
                type="color"
                ref={ref}
                value={internalValue}
                onChange={onChangeHandler}
                disabled={disabled}
                {...rest}
            />
            <span className={styles.content}>
                {children}
            </span>
        </label>
    );
}

export const ColorPicker = forwardRef(ColorPickerBase);
