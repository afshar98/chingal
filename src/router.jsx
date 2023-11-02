import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout/main-layout.jsx";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";
import Users, {usersLoader} from "./pages/users.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <UnhandledException/>,
        children: [
            {
                index: true,
                element: <Users />,
                loader: usersLoader,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;
