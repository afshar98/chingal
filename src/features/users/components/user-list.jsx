import {calculateAge} from "../../../helper/functions.js";
import {useNavigate} from "react-router-dom";
import {useSearchContext} from "../../../contexts/search-context.jsx";
const UserList = ({users}) => {

    const {search} = useSearchContext();

    const filteredUsers = users.filter((user) => user.name.includes(search));

    const navigate = useNavigate();
    const rowLinkHandler = (e)=>{
        navigate(`/user/${e}`)
    }

    return (
        <div className="flex justify-center">
            <table className="w-full border border-surface-300 border-collapse rounded-2xl">
                <thead>
                <tr className="bg-surface-100 bg-noise bg-no-repeat bg-cover">
                    <th className="border border-surface-300 text-surface-500 text-sm font-normal">نام کاربر</th>
                    <th className="border border-surface-300 text-surface-500 text-sm font-normal">سن</th>
                    <th className="border border-surface-300 text-surface-500 text-sm font-normal">شماره تلفن</th>
                    <th className="border border-surface-300 text-surface-500 text-sm font-normal">ایمیل</th>
                    <th className="border border-surface-300 text-surface-500 text-sm font-normal">آدرس</th>
                    <th className="border border-surface-300 text-surface-500 text-sm font-normal">شرکت</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((user) => (
                    <tr
                        key={user.id}
                        onClick={()=>rowLinkHandler(user.id)}
                        className="cursor-pointer bg-surface-200 even:bg-surface-100 even:bg-noise even:bg-no-repeat even:bg-cover"
                    >
                        <td className="p-4 text-center border border-surface-300">{user.name ? user.name : '-'}</td>
                        <td className="p-4 text-center border border-surface-300">{calculateAge(user.dateOfBirth)? calculateAge(user.dateOfBirth) : ''}</td>
                        <td className="p-4 text-center border border-surface-300">{user.phoneNumber ? user.phoneNumber : '-'}</td>
                        <td className="p-4 text-center border border-surface-300">{user.email ? user.email : '-'}</td>
                        <td className="p-4 text-center border border-surface-300">{user.city ? user.city : '-'}, {user.street ? user.street : '-'}, {user.zipcode ? user.zipcode : '-'}</td>
                        <td className="p-4 text-center border border-surface-300">{user.company ? user.company : '-'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default UserList;
