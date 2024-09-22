"use client";
import React, {useState} from 'react';
import AppBarButton from "@/components/AppBar/AppBarButton/AppBarButton";
import { Bell, Chat, Teams, Calendar, Call, File, Logo, More, PlusOutline
} from "../../../public/svg/icons";

function AppBar(): React.ReactElement {
    const [activeTab, setActiveTab] = useState("Van Arsdel");
    return (
        <div className="w-full sm:w-[72px] h-[60px] sm:h-[calc(100vh-48px)] bg-backgroundSecondary fixed bottom-0 sm:top-[48px] left-0 flex flex-row sm:flex-col justify-between sm:justify-start items-center overflow-y-scroll overflow-x-hidden z-50">
            <AppBarButton
                active={activeTab}
                icon={<Bell color={`${activeTab === "Activity" && "#4F52B2"}`}/>}
                title="Activity"
                handleFn={setActiveTab}
            />
            <AppBarButton
                active={activeTab}
                icon={<Chat color={`${activeTab === "Chat" && "#4F52B2"}`}/>}
                title="Chat"
                handleFn={setActiveTab}
            />
            <AppBarButton
                active={activeTab}
                icon={<Teams color={`${activeTab === "Teams" && "#4F52B2"}`}/>}
                title="Teams"
                handleFn={setActiveTab}
            />
            <AppBarButton
                active={activeTab}
                icon={<Calendar color={`${activeTab === "Calender" && "#4F52B2"}`}/>}
                title="Calendar"
                handleFn={setActiveTab}
            />
            <AppBarButton
                active={activeTab}
                icon={<Call color={`${activeTab === "Calls" && "#4F52B2"}`}/>}
                title="Calls"
                handleFn={setActiveTab}
                disable={true}
            />
            <AppBarButton
                active={activeTab}
                icon={<File color={`${activeTab === "Files" && "#4F52B2"}`}/>}
                title="Files"
                handleFn={setActiveTab}
                disable={true}
            />
            <AppBarButton
                active={activeTab}
                icon={<Logo color={`${activeTab === "Van Arsdel" && "#4F52B2"}`}/>}
                title="Van Arsdel"
                handleFn={setActiveTab}
                disable={true}
            />
            <AppBarButton
                active={activeTab}
                icon={<More className="!w-[20px] !h-[20px]" color={`${activeTab === "More" && "#4F52B2"}`}/>}
                title="More"
                handleFn={setActiveTab}
            />
            <AppBarButton
                active={activeTab}
                icon={<PlusOutline color={`${activeTab === "Apps" && "#4F52B2"}`}/>}
                title="Apps"
                handleFn={setActiveTab}
                disable={true}
            />
        </div>
    );
}

export default AppBar;
