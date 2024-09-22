"use client";
import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";
import {FirstChartProps} from "@/types/types";

function FirstChart({value, maxValue}: FirstChartProps): React.ReactElement{
    const data = [
        {
            name: "Label 1",
            value: value,
            fill: "#00B7C3"
        },
        {
            name: "Label 2",
            value: maxValue - value,
            fill: "#D1D1D1"
        }
    ]
    return (
        <div className="w-[340px] sm:w-[249px] h-[236px] flex flex-col items-center justify-center">
            <div className="relative w-full h-[60%]">
                <ResponsiveContainer>
                    <PieChart margin={{top: 40}}>
                        <Pie
                            data={data}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={86}
                            dataKey="value"
                            paddingAngle={1}
                        >
                            {data.map((item, index) => (
                                <Cell key={index} fill={item.fill} className="!outline-none"/>
                            ))}
                        </Pie>
                        <text
                            x="22%"
                            y="60%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={12}
                            fontWeight="bold"
                            className="sm:hidden !text-colorSecondary"
                        >
                            0
                        </text>
                        <text
                            x="12%"
                            y="60%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={12}
                            fontWeight="bold"
                            className="hidden sm:block !text-colorSecondary"
                        >
                            0
                        </text>
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={32}
                            fontWeight="bold"
                            className="!text-colorSecondary"
                        >
                            {value}%
                        </text>
                        <text
                            x="79%"
                            y="60%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={12}
                            fontWeight="bold"
                            className="sm:hidden !text-colorSecondary"
                        >
                            {maxValue}
                        </text>
                        <text
                            x="89%"
                            y="60%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={12}
                            fontWeight="bold"
                            className="hidden sm:block !text-colorSecondary"
                        >
                            {maxValue}
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-2">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex items-center gap-0.5">
                            <span className="w-2.5 h-2.5" style={{backgroundColor: item.fill}}></span>
                            <span className="text-fontSmall text-colorSecondary">{item.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FirstChart;
