"use client";
import React, {memo, useCallback} from 'react';
import {AppBarButtonProps} from "@/types/types";

function AppBarButton({icon, title, active, disable, handleFn}: AppBarButtonProps): React.ReactElement {

    const handleClick = useCallback(() => {
        if (handleFn) handleFn(title);
    }, [handleFn, title])

    return (
        <button className={`${disable && "hidden sm:flex"} w-[78px] sm:w-[68px] h-[60px] sm:h-14 flex flex-col flex-shrink-0
         items-center justify-center sm:border-l-2 ${active === title && "sm:border-colorBlue"} overflow-x-hidden`} onClick={handleClick}>
            {icon}
            <span
                className={`${title === "More" && "block sm:hidden"} text-fontXSmall text-colorTertiary ${active === title && "!text-colorBlue"}`}>{title}</span>
        </button>
    );
}

export default memo(AppBarButton);
