import React from 'react';
import {Lens, More, Setting, Unroll} from "../../../../public/svg/icons";
import {ChartCardProp} from "@/types/types";

function ChartCard({children, title}: ChartCardProp): React.ReactElement {
    return (
        <div className={`h-[400px] p-4 rounded-lg shadow-[0_2px_4px_0_#00000024] flex flex-col items-center justify-between`}>
            <div className="w-full flex flex-row items-center justify-between">
                <div>
                    <h3 className="text-fontBase text-colorSecondary font-bold">
                        {title}
                    </h3>
                    <p className="hidden sm:block text-fontSmall text-colorTertiary">Description</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    {
                        title === "Chart 4" ?
                        <>
                            <button><Lens color={"#424242"} className="!w-4"/></button>
                            <button><Unroll className="!w-4"/></button>
                            <button><Setting className="!w-4"/></button>
                        </> :
                        <></>
                    }
                    <button><More/></button>
                </div>
            </div>
            {children}
            {
                title !== "Chart 6" ?
                    <button className="w-full flex items-start justify-end sm:justify-start">
                        <span className="text-fontBase text-colorBlue text-start">View Details</span>
                    </button>
                    :
                    <></>
            }
        </div>
    );
}

export default ChartCard;
