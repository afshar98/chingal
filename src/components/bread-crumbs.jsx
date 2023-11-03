import React from 'react';
import {Link} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";

function BreadCrumbs({data}) {

    return (
        <ul className="mb-8 flex flex-row gap-1">
            {
                data.map((bread, i) =>
                    <li key={i} className="flex flex-row items-center last-of-type:text-surface-100 text-surface-500 dark:last-of-type:text-surface-900 dark:text-surface-500">
                        <span className="ml-1"><FiChevronLeft/></span>
                        <Link to={bread.path}>{bread.title}</Link>
                    </li>
                )
            }
        </ul>
    );
}

export default BreadCrumbs;