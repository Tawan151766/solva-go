import TemplateCard from './TemplateCard';

export default function TemplateGrid({ templates, onTemplateClick }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {templates.map((template) => (
        <TemplateCard 
          key={template.id} 
          template={template} 
          onClick={onTemplateClick}
        />
      ))}
    </div>
  );
}
