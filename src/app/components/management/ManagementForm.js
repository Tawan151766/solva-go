import { useEffect, useRef } from "react";

export default function ManagementForm({
  form,
  onChange,
  onSubmit,
  editId,
  onCancel,
  onPackageChange,
  onAddPackage,
  onRemovePackage,
}) {
  // Animation: focus on last package input when added
  const lastPkgRef = useRef(null);
  useEffect(() => {
    if (form.packages && form.packages.length > 0 && lastPkgRef.current) {
      lastPkgRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      lastPkgRef.current.querySelector("input")?.focus();
    }
  }, [form.packages?.length]);

  return (
    <form onSubmit={onSubmit} className="mb-8 space-y-2 p-4 rounded shadow">
      <input
        name="title"
        value={form.title}
        onChange={onChange}
        placeholder="Title"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="description"
        value={form.description}
        onChange={onChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="image"
        value={form.image}
        onChange={onChange}
        placeholder="Image URL"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="category"
        value={form.category}
        onChange={onChange}
        placeholder="Category"
        className="w-full border p-2 rounded"
        required
      />
      {/* Tags as multi-checkbox */}
      <div className="mb-2">
        <div className="font-semibold mb-1">Tags</div>
        <div className="flex flex-wrap gap-2">
          {["popular", "new", "sale", "recommended", "limited"].map((tag) => (
            <label key={tag} className="flex items-center gap-1">
              <input
                type="checkbox"
                name="tags"
                value={tag}
                checked={form.tags?.split(",").includes(tag)}
                onChange={(e) => {
                  let tagsArr = form.tags
                    ? form.tags
                        .split(",")
                        .map((t) => t.trim())
                        .filter(Boolean)
                    : [];
                  if (e.target.checked) {
                    if (!tagsArr.includes(tag)) tagsArr.push(tag);
                  } else {
                    tagsArr = tagsArr.filter((t) => t !== tag);
                  }
                  onChange({
                    target: { name: "tags", value: tagsArr.join(",") },
                  });
                }}
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
      </div>
      <select
        name="bu"
        value={form.bu}
        onChange={onChange}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">เลือก BU</option>
        <option value="คลีนิก">คลีนิก</option>
        <option value="อสังหา">อสังหา</option>
        <option value="ร้านอาหาร">ร้านอาหาร</option>
        <option value="โรงแรม">โรงแรม</option>
      </select>
      <input
        name="theme"
        value={form.theme}
        onChange={onChange}
        placeholder="Theme (comma separated)"
        className="w-full border p-2 rounded"
        required
      />

      <div className="border rounded p-2">
        <div className="font-semibold mb-2">Packages</div>
        {form.packages &&
          form.packages.length > 0 &&
          form.packages.map((pkg, idx) => (
            <div
              key={idx}
              ref={idx === form.packages.length - 1 ? lastPkgRef : null}
              className="animate-fadein"
            >
              <input
                type="text"
                value={pkg.title}
                onChange={(e) => onPackageChange(idx, "title", e.target.value)}
                placeholder="Package Title"
                className="w-full border p-2 rounded mb-1"
                required
              />
              <input
                type="text"
                value={pkg.des}
                onChange={(e) => onPackageChange(idx, "des", e.target.value)}
                placeholder="Description"
                className="w-full border p-2 rounded mb-1"
                required
              />
              {/* Option as select */}
              <select
                value={pkg.o || ""}
                onChange={(e) => onPackageChange(idx, "o", e.target.value)}
                className="w-full border p-2 rounded mb-1"
              >
                <option value="">Select Option</option>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
              <input
                type="text"
                value={pkg.img.join(",")}
                onChange={(e) =>
                  onPackageChange(
                    idx,
                    "img",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
                placeholder="Image URLs (comma separated)"
                className="w-full border p-2 rounded mb-1"
              />
              <button
                type="button"
                onClick={() => onRemovePackage(idx)}
                className="text-red-600 text-xs transition-all duration-200 hover:scale-110 hover:text-red-800"
                style={{ transition: "all 0.2s" }}
              >
                Remove Package
              </button>
            </div>
          ))}
        <button
          type="button"
          onClick={onAddPackage}
          className="rounded-xl bg-[#f0c674] hover:bg-[#f0c674] text-[#0d1117] font-semibold text-sm transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.98] shadow-sm hover:shadow-md px-3 py-1  text-xs animate-fadein"
          style={{ animation: "fadein 0.5s" }}
        >
          + Add Package
        </button>
      </div>

      <button
        type="submit"
        className="w-full h-12 px-6 rounded-xl bg-[#f0c674] hover:bg-[#f0c674] text-[#0d1117] font-semibold text-sm transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.98] shadow-sm hover:shadow-md animate-fadein"
        style={{ animation: "fadein 0.5s" }}
      >
        {editId ? "Update" : "Create"} Template
      </button>
      {editId && (
        <button
          type="button"
          onClick={onCancel}
          className="ml-2 px-4 py-2 rounded border"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

// Animation keyframes (inject global style if not present)
if (
  typeof window !== "undefined" &&
  !document.getElementById("fadein-keyframes")
) {
  const style = document.createElement("style");
  style.id = "fadein-keyframes";
  style.innerHTML = `@keyframes fadein { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none;} }
  .animate-fadein { animation: fadein 0.5s; }`;
  document.head.appendChild(style);
}
