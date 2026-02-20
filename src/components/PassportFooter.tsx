const PassportFooter = () => {
  return (
    <div className="border-t border-border bg-background px-8 py-5 text-xs text-muted-foreground">
      <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-[11px] leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Disclaimer:</strong> This battery pass demonstrator uses sample data for
        demonstration purposes only, and no representations are made regarding its accuracy,
        adequacy, completeness, legality, reliability, or usefulness.
      </div>
      <div className="text-center text-muted-foreground">
        © 2026 <strong className="text-foreground">BOS Battery Pass™</strong>
      </div>
    </div>
  );
};

export default PassportFooter;
