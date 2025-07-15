import { Footer } from "@/widgets/footer";
import {Header} from "@/widgets/header";
import {Outlet} from "react-router-dom";
import styles from './Layout.module.scss';

export function Layout() {
    return (
        <div className={styles.root}>
            <Header style={{ gridArea: 'header' }} />
            <div style={{ gridArea: 'content' }}>
                <Outlet />
            </div>
            <Footer style={{ gridArea: 'footer' }} />
        </div>
    )
}
