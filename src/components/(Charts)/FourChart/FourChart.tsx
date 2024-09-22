"use client";
import React from 'react';
import {RadialBar, RadialBarChart, ResponsiveContainer, Tooltip} from "recharts";
import {FourChartProps} from "@/types/types";

function FourChart({data}: FourChartProps): React.ReactElement {
    return (
        <div className="w-[340px] sm:w-[249px] h-[280px] flex flex-col items-center justify-center">
            <div className="relative w-full">
                <ResponsiveContainer width="100%" height={234}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="10%"
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={360}
                        barSize={10}
                        data={data}
                    >
                        <RadialBar
                            background
                            dataKey="value"
                        />
                        <Tooltip/>
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute top-3 right-16 flex flex-col gap-0.5 leading-none">
                    {
                        data.slice().reverse().map((item, index) => (
                            <div key={index} className="flex items-center gap-0.5">
                                <span className="w-2 h-2" style={{backgroundColor: item.fill}}></span>
                                <span className="text-fontXSmall text-colorSecondary">{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FourChart;
