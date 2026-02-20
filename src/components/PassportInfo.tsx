interface PassportInfoProps {
  batteryImage: string;
}

const PassportInfo = ({ batteryImage }: PassportInfoProps) => {
  return (
    <div className="px-8 pb-4 pt-2">
      {/* Passport ID */}
      <div className="mb-6 rounded-xl border border-border bg-secondary px-5 py-4">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Passport ID
        </label>
        <div className="mt-1 font-mono text-sm text-foreground">
          bos-ag:battery-x.battery.pass:98906464-0226151
        </div>
      </div>

      {/* Info Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-secondary p-5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Battery Type
          </label>
          <div className="mt-1.5 text-lg font-bold text-foreground">12V Lithium</div>
        </div>
        <div className="rounded-xl border border-border bg-secondary p-5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Serial Number
          </label>
          <div className="mt-1.5 text-lg font-bold text-foreground">98906464-0226151</div>
        </div>
      </div>

      {/* Battery Image */}
      <div className="my-8 text-center">
        <img
          src={batteryImage}
          alt="Battery illustration"
          className="mx-auto max-w-full rounded-xl"
        />
        <p className="mt-3 text-xs text-muted-foreground">
          Image is for illustrative purposes only
        </p>
      </div>

      {/* Economic Operator */}
      <div className="mb-6 rounded-xl border border-border bg-secondary p-6 text-center">
        <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Economic Operator
        </h3>
        <div className="text-2xl font-bold text-foreground">BOS AG</div>
        <a href="https://www.bos-ag.com/" className="mt-2 inline-block text-sm text-primary hover:underline">
          www.bos-ag.com
        </a>
      </div>
    </div>
  );
};

export default PassportInfo;
