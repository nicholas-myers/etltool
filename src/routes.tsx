import App from "./App";
import Extract from "./components/Extract";
import Load from "./components/Load";
import Transform from "./components/Transform";
const reformattedInfo = {
    id: "NMyers3070",
    firstName: "Nicholas",
    lastName: "Myers",
    phone: 3608313070,
    email: "korefucius00@gmail.com"
}
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
                element: <Transform data={reformattedInfo}/>
            },
            {
                path: "load",
                element: <Load />
            },
        ]
    },

]