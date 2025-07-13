"use client";
import { useState, use } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageHeader from "../../components/layout/PageHeader";
import { templatesData } from "../../data/templates";

export default function TemplateDetailPage({ params }) {
  const { id } = use(params);
  const template = templatesData.find((t) => t.id === Number(id));
  const [activeTab, setActiveTab] = useState(0);
  const packages = template?.packages || [];
  if (!template) {
    return <div className="p-8 text-center">ไม่พบข้อมูลเทมเพลตนี้</div>;
  }
  return (
    <MainLayout>
      <PageHeader title={template.title} />
      <div className="p-6 max-w-2xl mx-auto">
        <img
          src={template.image}
          alt={template.title}
          className="rounded-xl w-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{template.title}</h2>
        <p className="mb-4">{template.description}</p>
        <div className="mb-4">
          <strong>BU:</strong> {template.bu} <br />
          <strong>Theme:</strong> {template.theme.join(", ")}
        </div>
        <div className="mb-4">
          <strong>Packages:</strong>
          <div className="flex gap-2 mb-4">
            {packages.map((pkg, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-1 rounded-t-lg border-b-2 transition-colors ${
                  activeTab === idx
                    ? "border-[#a259f7] bg-[#f0c674] text-[#0d1117]"
                    : "border-transparent bg-gray-100 text-gray-500"
                }`}
              >
                {pkg.title}
              </button>
            ))}
          </div>
          {packages[activeTab] && (
            <div className="p-4 border rounded-lg bg-white">
              <div className="font-semibold mb-1">
                {packages[activeTab].title}
              </div>
              <div className="mb-2">{packages[activeTab].des}</div>
              <div className="text-xs text-gray-400">
                {packages[activeTab].o}
              </div>
              {Array.isArray(packages[activeTab].img) &&
                packages[activeTab].img.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {packages[activeTab].img.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="package"
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
