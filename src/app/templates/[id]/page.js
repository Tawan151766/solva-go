"use client";
import { useState, use } from "react";

import MainLayout from "../../components/layout/MainLayout";
import PageHeader from "../../components/layout/PageHeader";
import TemplateDetailHeader from "../../components/templates/TemplateDetailHeader";
import TemplateDetailTabs from "../../components/templates/TemplateDetailTabs";
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
    <div className="min-h-screen bg-[#0d1117] font-sans">
      <PageHeader title="Premium Template Detail" />
      <main className="max-w-lg mx-auto px-4 py-6 space-y-8">
        <TemplateDetailHeader title={template.title} description={template.description} />
        <img
          src={template.image}
          alt={template.title}
          className="rounded-xl w-full mb-4"
        />
        <div className="mb-4 text-[#f0c674]">
          <strong>BU:</strong> {template.bu} <br />
          <strong>Theme:</strong> {template.theme.join(", ")}
        </div>
        <TemplateDetailTabs packages={packages} activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  );
}
