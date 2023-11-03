import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout/main-layout.jsx";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";
import Users, {usersLoader} from "./pages/users.jsx";
import UserDetails, {editUserAction, userDetailsLoader} from "./features/users/components/user-details.jsx";

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
            {
                path: "user/:id",
                element: <UserDetails />,
                loader: userDetailsLoader,
                action: editUserAction,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;
