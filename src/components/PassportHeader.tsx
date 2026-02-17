const PassportHeader = () => {
  return (
    <div className="bg-primary px-8 py-10 text-center text-primary-foreground">
      <h1 className="mb-5 text-3xl font-bold">BOS Battery X</h1>
      <div className="mt-4">
        <div className="text-2xl font-bold">Battery Pass</div>
        <div className="mt-5">
          <span className="inline-block rounded-2xl bg-primary-foreground px-5 py-2 text-sm font-semibold text-success">
            ✓ Verified
          </span>
        </div>
        <div className="mx-auto mt-3 max-w-xl rounded-xl bg-primary p-4 font-mono text-base break-all">
          13 FEBRUARY 2026
        </div>
      </div>
    </div>
  );
};

export default PassportHeader;
