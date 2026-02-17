import { useState } from "react";
import { Lock } from "lucide-react";

interface PassportTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "general", label: "General" },
  { id: "materials", label: "Material Composition" },
  { id: "performance", label: "Performance" },
  { id: "compliance", label: "Compliance" },
  { id: "supply", label: "Supply Chain" },
  { id: "circularity", label: "Circularity" },
  { id: "carbon", label: "Carbon Footprint" },
];

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="border-b border-border py-5 last:border-b-0">
    <div className="mb-1 font-semibold text-foreground">{label}</div>
    <div className="text-[15px] text-foreground">{value}</div>
  </div>
);

const LoginOverlay = ({ section }: { section: string }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm ? (
        <div className="my-10 rounded-xl border-2 border-dashed border-border bg-secondary/50 px-10 py-16 text-center">
          <Lock className="mx-auto mb-5 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-semibold text-foreground">Authentication Required</h3>
          <p className="mb-6 text-muted-foreground">
            Please log in to access {section} information
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="rounded-lg bg-primary px-8 py-3 text-[15px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Login to View
          </button>
        </div>
      ) : (
        <div className="mx-auto my-5 max-w-sm rounded-xl border border-border bg-secondary p-8">
          <div className="mb-5 text-left">
            <label className="mb-2 block text-sm font-semibold text-foreground">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="mb-5 text-left">
            <label className="mb-2 block text-sm font-semibold text-foreground">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground">
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="flex-1 rounded-md bg-secondary px-4 py-3 font-semibold text-foreground"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const GeneralTab = () => (
  <div>
    <h2 className="mb-5 text-xl font-bold text-foreground">General</h2>
    <DetailRow label="Name" value="BOS-BATX-0604" />
    <DetailRow label="Manufactured on" value="April 2026" />
    <DetailRow label="Facility Address" value="Industriestraße 12, 89081 Ulm, Germany" />
    <DetailRow label="Manufactured By" value="Balance of Storage Systems" />
    <DetailRow label="Category" value="Industrial Battery" />
    <DetailRow label="Status" value="Original" />
    <DetailRow label="Weight" value="18.95 kg" />
  </div>
);

const MaterialsTab = () => (
  <div>
    <h2 className="mb-5 text-xl font-bold text-foreground">Material Composition</h2>
    <DetailRow label="Battery chemistry" value="Lithium Iron Phosphate (LiFePO₄)" />
    <DetailRow label="Critical raw materials" value="Lithium, Phosphorus, Graphite, Copper, Aluminum" />
    <DetailRow label="Cathode Material" value="Lithium Iron Phosphate (LiFePO₄)" />
    <DetailRow label="Anode Material" value="Graphite" />
    <DetailRow label="Electrolyte" value="Lithium Salt in Organic Solvent" />
    <DetailRow label="Hazardous substances" value="None" />
    <DetailRow label="Impact of substances" value="None" />
  </div>
);

const PerformanceTab = () => (
  <div>
    <h2 className="mb-5 text-xl font-bold text-foreground">Performance</h2>
    <DetailRow label="Rated capacity" value="180 Ah" />
    <DetailRow label="Maximum voltage" value="14.6 V" />
    <DetailRow label="Minimum voltage" value="11.2 V" />
    <DetailRow label="Nominal voltage" value="12.8 V" />
    <DetailRow label="Certified usable battery energy" value="2304 Wh" />
    <DetailRow label="Initial self-discharge rate" value="0.5% per month" />
    <DetailRow label="Internal resistance" value="0.025 Ω" />
  </div>
);

const CircularityTab = () => (
  <div>
    <h2 className="mb-5 text-xl font-bold text-foreground">Circularity</h2>
    <div className="border-b border-border py-5">
      <div className="mb-1 font-semibold text-foreground">Circularity information</div>
      <div className="mt-2 text-muted-foreground">🔗 <u>External link</u></div>
    </div>
    <div className="border-b border-border py-5">
      <div className="mb-1 font-semibold text-foreground">Recycled and renewable content</div>
      <div className="mt-2 text-muted-foreground">🔗 <u>External link</u></div>
    </div>
    <div className="py-5">
      <div className="mb-1 font-semibold text-foreground">
        Information on role of end-users in waste prevention and information on battery collection, preparation
      </div>
      <div className="mt-2 text-muted-foreground">🔗 <u>External link</u></div>
    </div>
  </div>
);

const CarbonTab = () => (
  <div>
    <h2 className="mb-5 text-xl font-bold text-foreground">Carbon Footprint</h2>
    <DetailRow label="Battery Carbon Footprint per Functional Unit" value="161.45 kgCO2e/kWh" />
    <DetailRow label="Contribution of raw material acquisition and pre-processing lifecycle stage" value="10.2 kgCO2e/kWh" />
    <DetailRow label="Contribution of main product production/manufacturing lifecycle stage" value="165.25 kgCO2e/kWh" />
    <DetailRow label="Contribution of distribution lifecycle stage" value="8.4 kgCO2e/kWh" />
    <DetailRow label="Contribution of end of life and recycling lifecycle stage" value="7.8 kgCO2e/kWh" />
    <DetailRow label="Carbon footprint performance class" value="'A'" />
    <DetailRow label="Absolute battery carbon footprint" value="0.40 tCO2e" />
  </div>
);

const PassportTabs = ({ activeTab, onTabChange }: PassportTabsProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case "general": return <GeneralTab />;
      case "materials": return <MaterialsTab />;
      case "performance": return <PerformanceTab />;
      case "compliance": return <LoginOverlay section="Compliance" />;
      case "supply": return <LoginOverlay section="Supply Chain" />;
      case "circularity": return <CircularityTab />;
      case "carbon": return <CarbonTab />;
      default: return <GeneralTab />;
    }
  };

  return (
    <div>
      <div className="flex overflow-x-auto border-b-2 border-border px-4 sm:px-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`-mb-[2px] whitespace-nowrap border-b-[3px] px-4 py-5 text-sm font-semibold transition-all sm:px-7 sm:text-base ${
              activeTab === tab.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-8">{renderContent()}</div>
    </div>
  );
};

export default PassportTabs;
