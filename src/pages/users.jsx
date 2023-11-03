import UserList from "../features/users/components/user-list.jsx";
import { httpService } from "@core/http-service";
import {Await, defer, useLoaderData, useLocation} from "react-router-dom";
import { Suspense } from "react";
import BreadCrumbs from "../components/bread-crumbs.jsx";

const Users = () => {

    const location = useLocation();
    const beadCrumbs = [
        {
            title: 'لیست کاربران',
            path: location.pathname
        }
    ]

    const data = useLoaderData();

    return (
        <div className="p-10">
            <BreadCrumbs data={beadCrumbs}/>
            <Suspense fallback={<p className="text-center text-lg">در حال دریافت اطلاعات ...</p>}>
                <Await resolve={data.users}>
                    {(loadedUsers) => <UserList users={loadedUsers} />}
                </Await>
            </Suspense>
        </div>
    );
};

const loadUsers = async () => {
    const response = await httpService.get("users");
    return response.data;
};

export async function usersLoader() {
    return defer({
        users: loadUsers(),
    });
}

export default Users;
