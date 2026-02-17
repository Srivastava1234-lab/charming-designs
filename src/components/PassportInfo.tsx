interface PassportInfoProps {
  batteryImage: string;
}

const PassportInfo = ({ batteryImage }: PassportInfoProps) => {
  return (
    <div className="p-8">
      <div className="mb-5 rounded-xl bg-secondary p-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-foreground">
          Passport ID
        </label>
        <div className="mt-1 text-sm break-all text-foreground">
          bos-ag:battery-x.battery.pass:98906464-0226151
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-xl border-l-4 border-primary bg-card p-4">
          <label className="text-xs font-semibold uppercase text-foreground">Battery Type</label>
          <div className="mt-1 text-lg font-semibold text-foreground">12V Lithium</div>
        </div>
        <div className="rounded-xl border-l-4 border-primary bg-card p-4">
          <label className="text-xs font-semibold uppercase text-foreground">Serial Number</label>
          <div className="mt-1 text-lg font-semibold text-foreground">98906464-0226151</div>
        </div>
      </div>

      <div className="my-8 text-center">
        <img
          src={batteryImage}
          alt="Battery illustration"
          className="mx-auto max-w-full rounded-xl"
        />
        <p className="mt-2 text-xs italic text-muted-foreground">
          Image is for illustrative purposes only
        </p>
      </div>

      <div className="mb-8 rounded-xl bg-secondary p-6 text-center">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
          Economic Operator
        </h3>
        <div className="text-2xl font-bold text-foreground">BOS AG</div>
        <div className="mt-2 text-muted-foreground">https://www.bos-ag.com/</div>
      </div>
    </div>
  );
};

export default PassportInfo;
