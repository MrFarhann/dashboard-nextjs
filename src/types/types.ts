import React from "react";

export interface ClassNameProps {
    className?: string;
}

export interface SvgIconsProps extends ClassNameProps {
    color?: string;
}

export interface SearchInputProps extends ClassNameProps{
    icon: React.ReactNode;
    placeholder: string;
}

export interface WindowsButtonProps {
    icon: React.ReactNode;
    handleFn?: () => void;
}

export interface AppBarButtonProps {
    icon: React.ReactNode;
    title: string;
    active: string;
    handleFn?: (title: string) => void;
    disable?: boolean;
}

export interface NavbarProps extends ClassNameProps{
    routes: string[];
    color?: string;
}

export interface HeaderProps {
    title: string;
}

export interface ToolButtonsProps {
    tools: string[];
}

export interface ToolbarButtonProps {
    title: string;
    index: number;
    active: number;
    handleFn: (index: number) => void;
}

export interface SelectOption {
    id: number;
    label: string;
    children?: SelectOption[]
}

export interface SelectProps {
    options: SelectOption[];
}

export interface OptionProps extends ClassNameProps{
    options: SelectOption[];
    selectedOption?: SelectOption | null;
    onSelect: (option: SelectOption) => void;
}

export interface ChartCardProp {
    children: React.ReactNode;
    title: string;
}

export interface FirstChartProps {
    value: number;
    maxValue: number;
}

export interface TwoChartDataType {
    month: string;
    value: number;
}

export interface TwoChartProps {
    data: TwoChartDataType[];
}

export interface ThreeChartDataType {
    month: string;
    uv: number;
    uvColor: string;
    pv: number;
    pvColor: string;
}

export interface ThreeChartProps {
    data: ThreeChartDataType[]
}

export interface FourChartDataType {
    name: string;
    value: number;
    fill: string;
}

export interface FourChartProps {
    data: FourChartDataType[];
}

export interface FiveChartDataType {
    name: string;
    value: number;
    fill: string;
}

export interface FiveChartProps {
    data: FiveChartDataType[];
}

export interface SixChartDataType {
    name: string;
    uv: number;
    pv: number;
    vv: number;
}

export interface SixChartProps {
    data: SixChartDataType[];
}
