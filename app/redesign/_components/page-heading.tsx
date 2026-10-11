export function PageHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
}) {
  return (
    <header className="cu-page-heading cu-container">
      <p className="cu-kicker">
        <i aria-hidden="true" />
        {eyebrow}
      </p>
      <h1>
        {title}
        {accent && (
          <>
            <br />
            <span>{accent}</span>
          </>
        )}
      </h1>
      <p className="cu-page-description">{description}</p>
      <div className="cu-heading-spectrum" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </header>
  );
}
