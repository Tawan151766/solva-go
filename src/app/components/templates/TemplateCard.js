export default function TemplateCard({ template, onClick }) {
  return (
    <div 
      className="flex flex-col gap-3 pb-3 cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => onClick(template)}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${template.image}")` }}
      ></div>
      <div>
        <p className="text-[#1d180c] text-base font-medium leading-normal">
          {template.title}
        </p>
        <p className="text-[#a18745] text-sm font-normal leading-normal">
          {template.description}
        </p>
      </div>
    </div>
  );
}
