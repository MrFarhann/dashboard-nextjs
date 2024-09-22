'use client';
import React, {useState} from 'react';
import Button from "@/components/Toolbar/ToolButtons/Button/Button";
import {ToolButtonsProps} from "@/types/types";

function ToolButtons({tools}: ToolButtonsProps): React.ReactElement {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
        <div className="flex flex-row items-center overflow-x-scroll flex-shrink-0">
            {
                tools.map((tool, index) => (
                    <Button key={index} title={tool} index={index} active={activeIndex} handleFn={setActiveIndex}/>
                ))
            }
        </div>
    );
}

export default ToolButtons;
