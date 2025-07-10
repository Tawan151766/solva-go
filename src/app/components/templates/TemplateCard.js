export default function TemplateCard({ template, onClick }) {
  return (
    <div 
      className="flex flex-col gap-3 pb-3 cursor-pointer hover:scale-105 transition-all duration-200"
      onClick={() => onClick(template)}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${template.image}")` }}
      ></div>
      <div>
        <p className="text-[#f0c674] text-base font-medium leading-normal">
          {template.title}
        </p>
        <p className="text-[#f0c674] text-sm font-normal leading-normal">
          {template.description}
        </p>
      </div>
    </div>
  );
}
