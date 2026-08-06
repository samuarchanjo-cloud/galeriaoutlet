export function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return <div className="section-heading">{eyebrow ? <span>{eyebrow}</span> : null}<h2>{children}</h2><i aria-hidden="true" /></div>;
}

