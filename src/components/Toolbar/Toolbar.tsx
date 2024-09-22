import React from 'react';
import {Lens, Menu} from "../../../public/svg/icons";
import ToolButtons from "@/components/Toolbar/ToolButtons/ToolButtons";
import SearchInput from "@/components/SearchInput/SearchInput";

const tools = ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text'];

function Toolbar(): React.ReactElement {
    return (
        <div className="hidden md:flex w-full h-12 px-5 flex-row items-center justify-between border-b border-borderColor flex-shrink-0">
            <div className="flex flex-row items-center gap-1.5">
                <button className="w-8 h-8 flex items-center justify-center"><Menu/></button>
                <ToolButtons tools={tools}/>
            </div>
            <div className="hidden lg:flex flex-row items-center gap-2">
                <button className="text-fontBase font-bold">Filter</button>
                <SearchInput icon={<Lens/>} placeholder={"Find"} className="!w-[200px] h-8 border border-borderColor border-b-[#616161]"/>
            </div>
        </div>
    );
}

export default Toolbar;
