const PassportFooter = () => {
  return (
    <div className="border-t border-border bg-card px-8 py-5 text-xs text-muted-foreground">
      <div className="mb-4 rounded-sm border-l-4 border-warning bg-secondary p-4 text-[11px] leading-relaxed">
        <strong>Disclaimer:</strong> This battery pass demonstrator uses sample data for
        demonstration purposes only, and no representations are made regarding its accuracy,
        adequacy, completeness, legality, reliability, or usefulness. The data is not intended for
        decision-making or commercial use.
      </div>
      <div className="text-center">
        © 2026 <strong>BOS Battery Pass™</strong>
      </div>
    </div>
  );
};

export default PassportFooter;
