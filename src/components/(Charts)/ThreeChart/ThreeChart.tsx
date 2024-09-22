"use client";
import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {ThreeChartProps} from "@/types/types";

function ThreeChart({data}: ThreeChartProps): React.ReactElement {
    const modifiedData = data.map(item => ({
        ...item,
        pvReduced: item.pv - 1
    }));
    return (
        <div className="w-[340px] md:w-[440px] h-[280px] flex flex-col items-center justify-center">
            <div className="relative w-full h-[72%]">
                <ResponsiveContainer width="97%">
                    <AreaChart width={2000} height={250} data={modifiedData}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.6}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.6}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00b7c3" stopOpacity={0.6}/>
                                <stop offset="95%" stopColor="#00b7c3" stopOpacity={0.6}/>
                            </linearGradient>
                        </defs>
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
                        <CartesianGrid horizontal={true} vertical={false}/>
                        <Tooltip/>
                        <Area
                            type="linear"
                            dataKey="uv"
                            stroke="#8884d8"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorUv)"
                            strokeLinecap="butt"
                        />
                        <Area
                            type="linear"
                            dataKey="pvReduced"
                            stroke="#00B7C3"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorPv)"
                            strokeLinecap="butt"
                        />
                        <Area
                            type="linear"
                            dataKey="pv"
                            stroke="#fff"
                            strokeWidth={2}
                            fillOpacity={0}
                            strokeLinecap="butt"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <span className="text-fontXSmall text-colorSecondary font-semibold">x-axis title</span>
            <div className="w-full pl-[53px] flex flex-row items-center gap-2">
                <div className="flex items-center gap-0.5">
                    <span className="w-2.5 h-2.5" style={{backgroundColor: modifiedData[0].pvColor}}></span>
                    <span className="text-fontSmall text-colorSecondary">Line 1</span>
                </div>
                <div className="flex items-center gap-0.5">
                    <span className="w-2.5 h-2.5" style={{backgroundColor: modifiedData[0].uvColor}}></span>
                    <span className="text-fontSmall text-colorSecondary">Line 2</span>
                </div>
            </div>
        </div>

    );
}

export default ThreeChart;
