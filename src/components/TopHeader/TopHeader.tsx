import React from 'react';
import Image from "next/image";
import {Person} from "../../../public/imgae";
import {Team, Arrow, Lens, More, Minimize, Maximize, Close, Tick}  from "../../../public/svg/icons";
import SearchInput from "@/components/SearchInput/SearchInput";
import WindowsButton from "@/components/TopHeader/WindowsButton/WindowsButton";

function TopHeader(): React.ReactElement {
    return (
        <div className="w-full hidden sm:flex h-12 pl-5 bg-backgroundSecondary flex-row items-center justify-between sticky top-0 left-0 border-b border-borderColor z-50">
            <Team/>
            <div className="flex flex-row items-center gap-6">
                <div className="flex items-center gap-5">
                    <button><Arrow className="rotate-180"/></button>
                    <button><Arrow/></button>
                </div>
                <SearchInput icon={<Lens/>} placeholder="Search" />
            </div>
            <div className="flex items-center gap-2 ">
                <button><More/></button>
                <div className="w-8 h-8 relative">
                    <Image src={Person} alt="" width={32} height={32} className="rounded-full w-8 h-8 object-cover"/>
                    <Tick className="absolute bottom-0 right-0 border-2 border-backgroundSecondary rounded-full"/>
                </div>
                <div className="flex items-center">
                    <WindowsButton icon={<Minimize/>}/>
                    <WindowsButton icon={<Maximize/>}/>
                    <WindowsButton icon={<Close/>}/>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
