"use client";
import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";
import {FiveChartProps} from "@/types/types";

function FiveChart({data}: FiveChartProps): React.ReactElement {
    return (
        <div className="w-[340px] sm:w-[249px] h-[236px] flex flex-col items-center justify-center">
            <div className="relative w-full h-[90%]">
                <ResponsiveContainer width="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={28}
                            fontWeight={600}
                        >
                            1000
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default FiveChart;