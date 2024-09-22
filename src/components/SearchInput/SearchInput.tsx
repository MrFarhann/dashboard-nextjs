import React from 'react';
import {SearchInputProps} from "@/types/types";

function SearchInput({icon, placeholder, className}: SearchInputProps): React.ReactElement {
    return (
        <div
            className={`w-[468px] p-2.5 flex flex-row items-center gap-2.5 shadow-[0_1px_3px_0_#00000024] rounded bg-background ${className}`}>
            {icon}
            <input type="text"
                   className="w-[96%] text-colorPrimary text-fontBase border-none outline-none placeholder:text-colorTertiary"
                   placeholder={placeholder}/>
        </div>
    );
}

export default SearchInput;
