import {calculateAge} from "../../../helper/functions.js";
import {useNavigate} from "react-router-dom";
import {useSearchContext} from "../../../contexts/search-context.jsx";
import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
const UserList = ({users}) => {

    const {search} = useSearchContext();

    const filteredUsers = users.filter((user) => user.name.includes(search));

    const navigate = useNavigate();
    const rowLinkHandler = (e)=>{
        navigate(`/user/${e}`)
    }

    const [sortKey, setSortKey] = useState(localStorage.getItem('sort-key') || null);
    const [sortOrder, setSortOrder] = useState(localStorage.getItem('sort-order') || 'asc');

    const handleSort = (key) => {
        if (key === sortKey) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            localStorage.setItem('sort-order', sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortKey(key);
            localStorage.setItem('sort-key', key)
            setSortOrder('asc');
            localStorage.setItem('sort-order', 'asc')
        }
    };

    const sortedData = [...filteredUsers].sort((a, b) => {
        if (sortKey === null) {
            return a.id - b.id;
        } else {
            const compareValue = a[sortKey].localeCompare(b[sortKey]);
            return sortOrder === 'asc' ? compareValue : -compareValue;
        }
    });


    return (
        <div className="h-[calc(100vh-250px)] overflow-y-scroll border border-surface-600 dark:border-surface-300 rounded-2xl">
            <table className="min-w-full border-collapse">
                <thead className="sticky top-0 bg-surface-800 bg-noise bg-no-repeat bg-cover dark:bg-surface-100">
                <tr>
                    <th
                        onClick={() => handleSort('name')}
                        className={`border cursor-pointer border-surface-600 text-surface-500 text-sm font-normal flex items-center justify-center dark:border-surface-300 dark:text-surface-500 ${
                            sortKey === 'name' && 'bg-primary-500 text-surface-900 dark:bg-primary-500 dark:text-surface-900'
                        }`}>                        نام کاربر
                        {sortKey === 'name' && sortOrder === 'asc' && <IoIosArrowUp/>}
                        {sortKey === 'name' && sortOrder === 'desc' && <IoIosArrowDown/>}
                    </th>
                    <th className="border border-surface-700 border-t-0 border-b-0 text-surface-500 dark:border-surface-300 dark:text-surface-500 text-sm font-normal">سن</th>
                    <th className="border border-surface-700 border-t-0 border-b-0 text-surface-500 dark:border-surface-300 dark:text-surface-500 text-sm font-normal">شماره تلفن</th>
                    <th className="border border-surface-700 border-t-0 border-b-0 text-surface-500 dark:border-surface-300 dark:text-surface-500 text-sm font-normal">ایمیل</th>
                    <th className="border border-surface-700 border-t-0 border-b-0 text-surface-500 dark:border-surface-300 dark:text-surface-500 text-sm font-normal">آدرس</th>
                    <th className="border border-surface-700 border-t-0 border-b-0 text-surface-500 dark:border-surface-300 dark:text-surface-500 text-sm font-normal">شرکت</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((user) => (
                    <tr
                        key={user.id}
                        onClick={()=>rowLinkHandler(user.id)}
                        className="cursor-pointer bg-surface-700 dark:bg-surface-200 even:bg-surface-800 dark:even:bg-surface-100 even:bg-noise even:bg-no-repeat even:bg-cover"
                    >
                        <td className="p-4 text-center border border-surface-600 dark:border-surface-300">{user.name ? user.name : '-'}</td>
                        <td className="p-4 text-center border border-surface-600 dark:border-surface-300">{calculateAge(user.dateOfBirth)? calculateAge(user.dateOfBirth) : ''}</td>
                        <td className="p-4 text-center border border-surface-600 dark:border-surface-300">{user.phoneNumber ? user.phoneNumber : '-'}</td>
                        <td className="p-4 text-center border border-surface-600 dark:border-surface-300">{user.email ? user.email : '-'}</td>
                        <td className="p-4 text-center border border-surface-600 dark:border-surface-300">{user.city ? user.city : '-'}, {user.street ? user.street : '-'}, {user.zipcode ? user.zipcode : '-'}</td>
                        <td className="p-4 text-center border border-surface-600 dark:border-surface-300">{user.company ? user.company : '-'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default UserList;
