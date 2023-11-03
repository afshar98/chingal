import React from 'react';
import {Link} from "react-router-dom";

function BreadCrumbs({data}) {

    return (
        <ul className="mb-8 flex flex-row gap-4">
            {
                data.map((bread, i)=>
                    <li key={i} className="last-of-type:text-surface-900 text-surface-500">
                        <Link to={bread.path}>{bread.title}</Link>
                    </li>
                )
            }
        </ul>
    );
}

export default BreadCrumbs;