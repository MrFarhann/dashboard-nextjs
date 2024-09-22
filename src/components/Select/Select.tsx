"use client";
import React, {useCallback, useState} from 'react';
import {SelectOption, SelectProps} from "@/types/types";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading/Loading";
const Option = dynamic(() => import("../Select/Option/Option"), {
    loading: () => <Loading/>,
});

function Select({options}: SelectProps): React.ReactElement {
    const [level1, setLevel1] = useState<SelectOption | null>(options[0]);
    const [level2, setLevel2] = useState<SelectOption | null>(level1?.children ? level1?.children[1] : null);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

    const handleLevel1Click = useCallback((option: SelectOption) => {
        setLevel1(option);
        setLevel2(null);
        setSelectedOption(null);
    }, []);

    const handleLevel2Click = useCallback((option: SelectOption) => {
        setLevel2(option);
        setSelectedOption(null);
    }, []);

    const handleFinalOptionClick = useCallback((option: SelectOption) => {
        setSelectedOption(option);
    }, []);

    return (
        <div className="hidden sm:block w-[170px] h-[calc(100vh-146px)] px-3 py-5 border-r border-r-borderColor flex-shrink-0">
            <div className="">
                <Option
                    options={options}
                    onSelect={handleLevel1Click}
                />

                {level1 && level1.children &&
                    <Option
                        options={level1.children}
                        selectedOption={level2}
                        onSelect={handleLevel2Click}
                        className="pl-3"
                    />
                }

                <div className="w-full h-2 mt-6"></div>

                {level2 && level2.children &&
                    <Option
                        options={level2.children}
                        selectedOption={selectedOption}
                        onSelect={handleFinalOptionClick}
                        className="pl-6"
                    />
                }
            </div>
        </div>
    );
}

export default Select;
