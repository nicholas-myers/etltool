import App from "./App";
import Extract from "./components/Extract";
import Load from "./components/Load";
import Transform from "./components/Transform";

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
                path: "transform",
                element: <Transform />
            },
            {
                path: "load",
                element: <Load />
            },
        ]
    },

]