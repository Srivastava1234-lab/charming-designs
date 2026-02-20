import { useState } from "react";
import { Lock } from "lucide-react";

interface PassportTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "general", label: "General" },
  { id: "materials", label: "Materials" },
  { id: "performance", label: "Performance" },
  { id: "compliance", label: "Compliance" },
  { id: "supply", label: "Supply Chain" },
  { id: "circularity", label: "Circularity" },
  { id: "carbon", label: "Carbon" },
];

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="group flex items-start justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-secondary/50">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-right text-sm font-medium text-foreground">{value}</span>
  </div>
);

const LoginOverlay = ({ section }: { section: string }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm ? (
        <div className="flex flex-col items-center py-16">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <Lock className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="mb-1 text-base font-semibold text-foreground">Authentication Required</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Log in to view {section} data
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Login to View
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-xs py-8">
          <div className="mb-4">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="flex-1 rounded-full border border-border py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
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
  <div className="space-y-0.5">
    <DetailRow label="Name" value="BOS-BATX-0604" />
    <DetailRow label="Manufactured" value="April 2026" />
    <DetailRow label="Facility" value="Industriestraße 12, 89081 Ulm, Germany" />
    <DetailRow label="Manufacturer" value="Balance of Storage Systems" />
    <DetailRow label="Category" value="Industrial Battery" />
    <DetailRow label="Status" value="Original" />
    <DetailRow label="Weight" value="18.95 kg" />
  </div>
);

const MaterialsTab = () => (
  <div className="space-y-0.5">
    <DetailRow label="Chemistry" value="Lithium Iron Phosphate (LiFePO₄)" />
    <DetailRow label="Critical raw materials" value="Lithium, Phosphorus, Graphite, Copper, Aluminum" />
    <DetailRow label="Cathode" value="Lithium Iron Phosphate (LiFePO₄)" />
    <DetailRow label="Anode" value="Graphite" />
    <DetailRow label="Electrolyte" value="Lithium Salt in Organic Solvent" />
    <DetailRow label="Hazardous substances" value="None" />
    <DetailRow label="Impact" value="None" />
  </div>
);

const PerformanceTab = () => (
  <div className="space-y-0.5">
    <DetailRow label="Rated capacity" value="180 Ah" />
    <DetailRow label="Max voltage" value="14.6 V" />
    <DetailRow label="Min voltage" value="11.2 V" />
    <DetailRow label="Nominal voltage" value="12.8 V" />
    <DetailRow label="Usable energy" value="2304 Wh" />
    <DetailRow label="Self-discharge" value="0.5% / month" />
    <DetailRow label="Internal resistance" value="0.025 Ω" />
  </div>
);

const CircularityTab = () => (
  <div className="space-y-0.5">
    <LinkRow label="Circularity information" />
    <LinkRow label="Recycled and renewable content" />
    <LinkRow label="End-user waste prevention info" />
  </div>
);

const LinkRow = ({ label }: { label: string }) => (
  <div className="flex items-center justify-between rounded-lg px-3 py-3 transition-colors hover:bg-secondary/50">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-xs font-medium text-primary">View ↗</span>
  </div>
);

const CarbonTab = () => (
  <div className="space-y-0.5">
    <DetailRow label="Carbon footprint / functional unit" value="161.45 kgCO₂e/kWh" />
    <DetailRow label="Raw material acquisition" value="10.2 kgCO₂e/kWh" />
    <DetailRow label="Manufacturing" value="165.25 kgCO₂e/kWh" />
    <DetailRow label="Distribution" value="8.4 kgCO₂e/kWh" />
    <DetailRow label="End of life & recycling" value="7.8 kgCO₂e/kWh" />
    <DetailRow label="Performance class" value="A" />
    <DetailRow label="Absolute footprint" value="0.40 tCO₂e" />
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
      {/* Tab bar */}
      <div className="mx-6 flex gap-1 overflow-x-auto rounded-xl bg-secondary/60 p-1 sm:mx-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm ${
              activeTab === tab.id
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-bold text-foreground">
          {tabs.find(t => t.id === activeTab)?.label}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default PassportTabs;
