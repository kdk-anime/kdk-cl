import {Provider} from "react-redux";
import {createStore} from "@/app/store";
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";
import {routes} from "@/pages";
import "./index.scss";

export function Application() {
    return (
        <StrictMode>
            <Provider store={createStore()}>
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
}
