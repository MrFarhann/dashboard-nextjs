import React from "react";
import Header from "@/components/Header/Header";
import Toolbar from "@/components/Toolbar/Toolbar";
import Select from "@/components/Select/Select";
import {optionsData} from "@/data/data";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading/Loading";

const MainCharts = dynamic(() => import("../components/MainCharts/MainCharts"), {
    loading: () => <Loading/>
});

export default function Home(): React.ReactElement {
  return (
      <div className="w-full sm:pl-[72px] relative flex flex-col">
          <Header title={"Van Arsdel"}/>
          <Toolbar/>
          <div className="w-full h-[calc(100vh-150px) flex flex-row overflow-hidden">
              <Select options={optionsData}/>
              <MainCharts/>
          </div>
      </div>
  );
}
