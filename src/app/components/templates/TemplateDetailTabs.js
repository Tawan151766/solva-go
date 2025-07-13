export default function TemplateDetailTabs({ packages, activeTab, setActiveTab }) {
  return (
    <div className="mb-4">
      <strong className="block mb-2 text-[#f0c674]">Packages:</strong>
      <div className="flex gap-2 mb-4">
        {packages.map((pkg, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-1 rounded-t-lg border-b-2 transition-colors ${
              activeTab === idx
                ? 'border-[#a259f7] bg-[#f0c674] text-[#0d1117]'
                : 'border-transparent bg-gray-100 text-gray-500'
            }`}
          >
            {pkg.title}
          </button>
        ))}
      </div>
      {packages[activeTab] && (
        <div className="p-4 border rounded-lg bg-white">
          <div className="font-semibold mb-1">{packages[activeTab].title}</div>
          <div className="mb-2">{packages[activeTab].des}</div>
          <div className="text-xs text-gray-400">{packages[activeTab].o}</div>
          {Array.isArray(packages[activeTab].img) && packages[activeTab].img.length > 0 && (
            <div className="flex gap-2 mt-2">
              {packages[activeTab].img.map((img, i) => (
                <img key={i} src={img} alt="package" className="w-20 h-20 object-cover rounded" />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
