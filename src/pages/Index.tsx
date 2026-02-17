import { useState } from "react";
import batteryImage from "@/assets/battery-x.png";
import PassportHeader from "@/components/PassportHeader";
import PassportInfo from "@/components/PassportInfo";
import PassportTabs from "@/components/PassportTabs";
import PassportFooter from "@/components/PassportFooter";

const Index = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen bg-background p-5">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-card shadow-xl">
        <PassportHeader />
        <PassportInfo batteryImage={batteryImage} />
        <PassportTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <PassportFooter />
      </div>
    </div>
  );
};

export default Index;
