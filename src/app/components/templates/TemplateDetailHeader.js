export default function TemplateDetailHeader({ title, description }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-[#f0c674] text-2xl font-bold mb-2">{title}</h2>
      <p className="text-[#f0c674] text-base">{description}</p>
    </div>
  );
}
