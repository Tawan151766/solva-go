export function PlanCard({ image, title, subtitle, description, price }) {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
          <p className="text-[#a18745] text-sm font-normal leading-normal">{title}</p>
          <p className="text-[#1d180c] text-lg font-bold leading-tight tracking-[-0.015em]">{subtitle}</p>
          <div className="flex items-end gap-3 justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[#a18745] text-base font-normal leading-normal">{description}</p>
              <p className="text-[#a18745] text-base font-normal leading-normal">Starting at</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4af00] text-[#1d180c] text-sm font-medium leading-normal">
              <span className="truncate">{price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}