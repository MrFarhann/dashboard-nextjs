"use client";
import React from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {SixChartProps} from "@/types/types";

function SixChart({data}: SixChartProps): React.ReactElement {
    return (
        <div className="w-[340px] md:w-[440px] h-[280px] pt-3 flex flex-col items-center justify-end">
            <div className="relative w-full h-[96%]">
                <ResponsiveContainer width="100%" className="!left-0">
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid horizontal={true} vertical={false}/>
                        <XAxis dataKey="name" fontSize={10} interval={0} axisLine={false}/>
                        <YAxis
                            domain={[0, 100]}
                            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                            fontSize={12}
                            interval={0}
                            axisLine={false}
                        />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#93C5FD" />
                        <Bar dataKey="uv" fill="#1D4ED8" />
                        <Bar dataKey="vv" fill="#888888" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SixChart;
