"use client";
import React from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {TwoChartProps} from "@/types/types";

function TwoChart({data}: TwoChartProps): React.ReactElement {
    return (
        <div className="w-[340px] sm:w-[249px] h-[280px] flex flex-col items-center justify-center">
            <div className="relative w-full h-[80%]">
                <ResponsiveContainer width="100%">
                    <BarChart
                        width={600}
                        height={300}
                        data={data}
                        barSize={22}
                    >
                        <CartesianGrid horizontal={true} vertical={false}/>
                        <XAxis dataKey="month" fontSize={12} interval={0} axisLine={false}/>
                        <YAxis
                            domain={[0, 100]}
                            ticks={[0, 20, 40, 60, 80, 100]}
                            fontSize={12}
                            interval={0}
                            tickFormatter={(value) => `${value}K`}
                            axisLine={false}
                            label={{
                                value: 'x-axis title',
                                angle: -90,
                                position: 'insideLeft',
                                fontSize: 10,
                                fontWeight: 'bold',
                                fill: "#414141",
                            }}
                        />
                        <Tooltip/>
                        <Bar dataKey="value" fill="#00B7C3"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <span className="text-fontXSmall text-colorSecondary font-semibold">x-axis title</span>
        </div>
    );
}

export default TwoChart;