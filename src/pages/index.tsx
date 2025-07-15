import { paths } from "@/shared/config";
import {Route, Routes} from "react-router-dom";
import { HomePage } from "./home";
import {PlayerPage} from "./player";
import {Layout} from "@/pages/layout";

export const routes = (
    <Routes>
        <Route element={<Layout />}>
            <Route path={paths.Home} element={<HomePage />} />
            <Route path={paths.Player} element={<PlayerPage />} />
        </Route>
    </Routes>
)
