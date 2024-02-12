import {
    createBrowserRouter
} from "react-router-dom";

import ProviderDirectory from "./directory"
import ProviderProfile, { loader as profileLoader } from "./profile"
import ErrorPage from "./error";
import RootPage from "./app";
import { fetchProviders} from "../scripts/api"



export default createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "provider",
                loader: fetchProviders,
                element: <ProviderDirectory />
            },
            {
                path: "provider/:profileId",
                loader: profileLoader,
                element: <ProviderProfile />
            }
        ]
    }
])