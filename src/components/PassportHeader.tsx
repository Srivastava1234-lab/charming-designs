const PassportHeader = () => {
  return (
    <div className="text-center">
      <div className="mb-6 flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          BOS AG
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Battery Pass
      </h1>

      <div className="mt-5 flex items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-success">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Verified
        </span>
        <span className="text-xs text-muted-foreground">13 Feb 2026</span>
      </div>
    </div>
  );
};

export default PassportHeader;
