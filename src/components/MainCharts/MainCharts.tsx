import React from 'react';
import ChartCard from "@/components/MainCharts/ChartCard/ChartCard";
import Navbar from "@/components/Navbar/Navbar";
import FirstChart from "@/components/(Charts)/FirstChart/FirstChart";
import TwoChart from "@/components/(Charts)/TwoChart/TwoChart";
import {fiveChartData, fourChartData, sixChartData, threeChartData, twoChartData} from "@/data/data";
import ThreeChart from "@/components/(Charts)/ThreeChart/ThreeChart";
import FourChart from "@/components/(Charts)/FourChart/FourChart";
import FiveChart from "@/components/(Charts)/FiveChart/FiveChart";
import SixChart from "@/components/(Charts)/SixChart/SixChart";


function MainCharts(): React.ReactElement {
    return (
        <main
            className="w-full h-[calc(100vh-150px) p-2 pb-[62px] flex flex-row justify-center flex-wrap gap-3 overflow-y-scroll">
            <ChartCard title={"Card item"}>
                <Navbar color="#00B7C3" routes={['7 days', '30 days', '60 days']} className=" w-[180px] sm:w-full h-8"/>
                <FirstChart value={72} maxValue={100}/>
            </ChartCard>
            <ChartCard title={"Card item"}>
                <TwoChart data={twoChartData}/>
            </ChartCard>
            <ChartCard title={"Chart 3"}>
                <Navbar color="#00B7C3" routes={['7 days', '30 days', '60 days']} className="w-[180px] sm:w-full h-8"/>
                <ThreeChart data={threeChartData}/>
            </ChartCard>
            <ChartCard title={"Chart 4"}>
                <FourChart data={fourChartData}/>
            </ChartCard>
            <ChartCard title={"Chart 5"}>
                <Navbar color="#00B7C3" routes={['7 days', '30 days', '60 days']} className="w-[180px] sm:w-full h-8"/>
                <FiveChart data={fiveChartData}/>
            </ChartCard>
            <ChartCard title={"Chart 6"}>
                <Navbar color="#00B7C3" routes={['First tab', 'Second tab', 'Third tab']} className="w-[230px] sm:w-full h-8"/>
                <SixChart data={sixChartData}/>
            </ChartCard>
        </main>
    );
}

export default MainCharts;
