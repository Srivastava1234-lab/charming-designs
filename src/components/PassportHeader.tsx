const PassportHeader = () => {
  return (
    <div className="relative overflow-hidden bg-background px-8 py-12 text-center">
      {/* Subtle red accent line at top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      
      <h1 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
        BOS AG
      </h1>
      <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Battery Pass
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
          <span className="inline-block h-2 w-2 rounded-full bg-success" />
          Verified
        </span>
      </div>
      <div className="mx-auto mt-4 text-sm text-muted-foreground">
        13 February 2026
      </div>
    </div>
  );
};

export default PassportHeader;
