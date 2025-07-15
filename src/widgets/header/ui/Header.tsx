import {HeaderBody, HeaderItem} from "@/entities/header";
import {Icon, LogoIcon} from "@/shared/ui";
import type {ComponentProps, PropsWithChildren} from "react";

interface HeaderProps extends Omit<ComponentProps<typeof HeaderBody>, keyof PropsWithChildren> {}

// TODO: set redirects
export function Header({ ...rest }: HeaderProps) {
    return (
        <HeaderBody {...rest}>
            <HeaderItem>
                <LogoIcon />
            </HeaderItem>
            <HeaderItem>
                <Icon name="local_movies" />
            </HeaderItem>
            <HeaderItem>
                <Icon name="history" />
            </HeaderItem>
            <div style={{ flex: 1 }} />
            <HeaderItem>
                <Icon name="search" />
            </HeaderItem>
            <HeaderItem>
                <Icon name="settings" />
            </HeaderItem>
        </HeaderBody>
    )
}
