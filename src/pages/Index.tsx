import { useState } from "react";
import batteryImage from "@/assets/battery-x.png";
import PassportHeader from "@/components/PassportHeader";
import PassportInfo from "@/components/PassportInfo";
import PassportTabs from "@/components/PassportTabs";
import PassportFooter from "@/components/PassportFooter";

const Index = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="dark min-h-screen bg-background">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[960px] px-4 py-8 sm:px-6 sm:py-12">
        <PassportHeader />
        <div className="mt-6 overflow-hidden rounded-2xl glass shadow-2xl shadow-black/20">
          <PassportInfo batteryImage={batteryImage} />
          <PassportTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <PassportFooter />
      </div>
    </div>
  );
};

export default Index;
