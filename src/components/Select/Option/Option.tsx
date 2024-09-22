import React, {memo} from 'react';
import {OptionProps} from "@/types/types";
import {SmallArrow} from "../../../../public/svg/icons";

function Option({options, selectedOption, onSelect, className}: OptionProps): React.ReactElement {
    return (
        <ul className="w-full h-8">
            {options.map((option, index) => (
                <li
                    key={index}
                    className={`w-full h-8 flex items-center justify-start gap-1 cursor-pointer ${option.id === selectedOption?.id && "bg-backgroundSecondary rounded"} ${className}`}
                    onClick={() => onSelect(option)}
                >
                    <SmallArrow/>
                    <span className="text-fontBase text-colorSecondary select-none">{option.label}</span>
                </li>
            ))}
        </ul>
    );
}

export default memo(Option);
