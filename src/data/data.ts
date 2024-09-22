import {
    FiveChartDataType,
    FourChartDataType,
    SelectOption, SixChartDataType,
    ThreeChartDataType,
    TwoChartDataType,
} from "@/types/types";

export const optionsData: SelectOption[] = [
    {
        id: 0,
        label: "Group Title",
        children: [
            {
                id: 0,
                label: "Option"
            },
            {
                id: 1,
                label: "Option",
                children: [
                    {id: 0, label: "Item"},
                    {id: 1, label: "Item"},
                    {id: 2, label: "Item"},
                    {id: 3, label: "Item"},
                    {id: 4, label: "Item"},
                ]},
        ]}
];

export const twoChartData: TwoChartDataType[] = [
    { month: 'Jan', value: 75 },
    { month: 'Feb', value: 80 },
    { month: 'Mar', value: 64 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 64 },
    { month: 'Jun', value: 95 },
];

export const threeChartData: ThreeChartDataType[] = [
    {
        "month": "Jan",
        "uv": 69,
        "uvColor": "#8884d8",
        "pv": 51,
        "pvColor": "#00b7c3"
    },
    {
        "month": "Feb",
        "uv": 82,
        "uvColor": "#8884d8",
        "pv": 59,
        "pvColor": "#00b7c3"
    },
    {
        "month": "Mar",
        "uv": 98,
        "uvColor": "#8884d8",
        "pv": 49,
        "pvColor": "#00b7c3"
    },
    {
        "month": "Apr",
        "uv": 80,
        "uvColor": "#8884d8",
        "pv": 40,
        "pvColor": "#00b7c3"
    },
    {
        "month": "May",
        "uv": 20,
        "uvColor": "#8884d8",
        "pv": 57,
        "pvColor": "#00b7c3"
    },
    {
        "month": "Jun",
        "uv": 82,
        "uvColor": "#8884d8",
        "pv": 60,
        "pvColor": "#00b7c3"
    }
]

export const fourChartData: FourChartDataType[] = [
    { name: '30%', value: 100, fill: '#BFDBFE' },
    { name: '30%', value: 80, fill: '#1E3A8A' },
    { name: '30%', value: 60, fill: '#1D4ED8' },
    { name: '30%', value: 80, fill: '#60A5FA' },
    { name: '30%', value: 50, fill: '#AAAAAA' },
    { name: '30%', value: 70, fill: '#60A5FA' },
    { name: '30%', value: 80, fill: '#3B82F6' },
    { name: '30%', value: 90, fill: '#555555' },
]

export const fiveChartData: FiveChartDataType[] = [
    { name: 'Group A', value: 550, fill: "#A6E9ED" },
    { name: 'Group B', value: 200, fill: "#00666D" },
    { name: 'Group C', value: 150, fill: "#005B70" },
    { name: 'Group D', value: 100, fill: "#00B7C3" },
    { name: 'Group E', value: 250, fill: "#F5F5F5" },
]

export const sixChartData: SixChartDataType[] = [
    {
        "name": "XS",
        "uv": 85,
        "pv": 66,
        "vv": 30
    },
    {
        "name": "S",
        "uv": 85,
        "pv": 66,
        "vv": 30
    },
    {
        "name": "M",
        "uv": 85,
        "pv": 66,
        "vv": 30
    },
    {
        "name": "L",
        "uv": 85,
        "pv": 66,
        "vv": 30
    },
    {
        "name": "XL",
        "uv": 85,
        "pv": 66,
        "vv": 30
    },
    {
        "name": "XXL",
        "uv": 85,
        "pv": 66,
        "vv": 30
    }
]