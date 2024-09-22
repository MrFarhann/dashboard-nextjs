"use client";
import React, {useCallback} from 'react';
import {WindowsButtonProps} from "@/types/types";

function WindowsButton({icon, handleFn}: WindowsButtonProps): React.ReactElement{

    const handleClick = useCallback(() => {
        if (handleFn) handleFn();
    }, [handleFn]);

    return (
        <button className="hidden lg:flex w-12 h-12 items-center justify-center" onClick={handleClick}>
            {icon}
        </button>
    );
}

export default WindowsButton;
