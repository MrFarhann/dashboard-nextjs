import React from 'react';
import {ToolbarButtonProps} from "@/types/types";
import {Circle, SmallArrow} from "../../../../../public/svg/icons";

function Button({title, index, active, handleFn}: ToolbarButtonProps): React.ReactElement {
    return (
        <>
            <button
                className={`w-[76px] ${active === index && "w-[92px] bg-colorBlue rounded text-white"} h-8 flex items-center justify-center gap-1.5`}
                onClick={() => handleFn(index)}
            >
                <Circle color={active === index ? "#ffffff" : ""}/>
                <span className="text-fontBase font-semibold">{title}</span>
                {
                    active === index &&
                    <SmallArrow color={"#ffffff"}/>
                }
            </button>
            {(index + 1) % 3 === 0 &&
                <div className="w-5 h-5 flex items-center justify-center">
                    <span className="w-[1px] h-5 bg-borderColor"></span>
                </div>}
        </>
    );
}

export default Button;
