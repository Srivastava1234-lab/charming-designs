interface PassportInfoProps {
  batteryImage: string;
}

const PassportInfo = ({ batteryImage }: PassportInfoProps) => {
  return (
    <div className="p-6 sm:p-8">
      {/* Passport ID */}
      <div className="rounded-xl bg-secondary/60 p-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Passport ID
          </span>
          <div className="h-px flex-1 bg-border/50" />
        </div>
        <div className="mt-2 font-mono text-sm tracking-wide text-foreground/80">
          bos-ag:battery-x.battery.pass:98906464-0226151
        </div>
      </div>

      {/* Stat Cards */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard label="Battery Type" value="12V Lithium" />
        <StatCard label="Serial Number" value="98906464-0226151" />
        <StatCard label="Weight" value="18.95 kg" />
      </div>

      {/* Battery Image */}
      <div className="my-8 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-2xl" />
          <img
            src={batteryImage}
            alt="Battery illustration"
            className="relative max-h-64 rounded-2xl object-contain"
          />
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Illustrative purposes only
        </p>
      </div>

      {/* Economic Operator */}
      <div className="rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/40 p-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Economic Operator
        </span>
        <div className="mt-2 text-xl font-bold text-foreground">BOS AG</div>
        <a
          href="https://www.bos-ag.com/"
          className="mt-1 inline-block text-xs text-primary transition-colors hover:text-primary/80"
        >
          www.bos-ag.com ↗
        </a>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl bg-secondary/60 p-4 transition-colors hover:bg-secondary/80">
    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
      {label}
    </div>
    <div className="mt-1.5 text-base font-semibold text-foreground">{value}</div>
  </div>
);

export default PassportInfo;
