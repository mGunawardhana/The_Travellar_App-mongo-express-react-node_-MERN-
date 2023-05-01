import React from "react";
import { SystemNavData} from "../data";

const SystemNav =() =>{
    return (
        <nav>
            <ul className="flex gap-x-8">
                {SystemNavData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};


export default SystemNav;