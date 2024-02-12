import {
    createBrowserRouter
} from "react-router-dom";

import ProviderDirectory from "./directory"
import ProviderProfile from "./profile"
import ErrorPage from "./error";
import RootPage from "./app";

export default createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "provider",
                element: <ProviderDirectory />
            },
            {
                path: "provider/:profileId",
                element: <ProviderProfile />
            }
        ]
    }
])