import React from 'react';
import {Bot, Logo, More, Quick} from "../../../public/svg/icons";
import Navbar from "@/components/Navbar/Navbar";
import {HeaderProps} from "@/types/types";
import Image from "next/image";
import {Person} from "../../../public/imgae";

const routes = ['Home', 'Timeline', 'Chat', 'Assigned to you'];
const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

function Header({title}: HeaderProps): React.ReactElement {
    return (
        <div className="w-full flex flex-col">
            <div
                className="w-full h-11 pt-2 sm:h-[60px] px-4 sm:px-5 sticky top-0 left-0 flex flex-row items-center justify-between sm:border-b border-borderColor">
                <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:bg-black rounded-[4px] flex items-center justify-center">
                            <Logo color="#ffffff" className="hidden sm:block"/>
                            <Image src={Person} alt="" width={32} height={32} className="sm:hidden rounded-full w-8 h-8 object-cover"/>
                        </div>
                        <h1 className="font-black text-colorPrimary text-lg">{title}</h1>
                    </div>
                    <Navbar routes={routes} className="hidden sm:flex"/>
                </div>
                <div className="flex items-center">
                    <button className="p-1.5 hidden sm:block"><Quick/></button>
                    <button className="p-1.5 sm:hidden"><Bot/></button>
                    <button className="p-1.5"><More/></button>
                </div>
            </div>
            <Navbar routes={tabs} className="w-full justify-between sm:hidden border-b border-borderColor"/>
        </div>
    );
}

export default Header;
