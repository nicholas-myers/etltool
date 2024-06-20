import App from "./App";
import Extract from "./components/Extract";
import Load from "./components/Load";
import Transfer from "./components/Transfer";

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "extract",
                element: <Extract />
            },
            {
                path: "transfer",
                element: <Transfer />
            },
            {
                path: "load",
                element: <Load />
            },
        ]
    },

]