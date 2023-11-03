import UserList from "../features/users/components/user-list.jsx";
import { httpService } from "@core/http-service";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const Users = () => {
    const data = useLoaderData();

    return (
        <div className="p-10">
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
