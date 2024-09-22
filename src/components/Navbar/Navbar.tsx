"use client";
import React, {useState} from 'react';
import {NavbarProps} from "@/types/types";

function Navbar({routes, color, className}: NavbarProps): React.ReactElement {

    const [currentRoute, setCurrentRoute] = useState<string>(routes[0]);

    return (
        <ul className={`h-[52px] flex items-center overflow-x-scroll ${className}`}>
            {
                routes.map((route, index) =>
                    <li
                        key={index}
                        className={"relative w-1/3 sm:w-auto sm:px-2.5 h-full flex items-center cursor-pointer border-b border-transparent"}
                        onClick={() => setCurrentRoute(route)}>
                        <div
                            className={`w-full h-full flex items-center justify-center ${route === currentRoute && "font-semibold"}`}>
                            <span className="text-fontBase">{route}</span>
                        </div>
                        {
                            route === currentRoute &&
                            <span className="w-full h-[3px] bg-colorBlue absolute bottom-0 left-0 sm:rounded-t-full" style={{backgroundColor: color}}></span>
                        }
                    </li>
                )
            }
        </ul>
    );
}

export default Navbar;