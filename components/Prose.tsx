export default function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose-essai"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
