'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import SearchBar from '../components/templates/SearchBar';
import FilterBar from '../components/templates/FilterBar';
import TemplateGrid from '../components/templates/TemplateGrid';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBu, setActiveBu] = useState('All');
  const [activeTheme, setActiveTheme] = useState('All');
  const [templates, setTemplates] = useState([]);
  const router = useRouter();

  // Fetch templates from API
  useEffect(() => {
    fetch('/api/templates')
      .then(res => res.json())
      .then(data => setTemplates(data));
  }, []);

  const filteredTemplates = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return templates.filter(template => {
      if (search &&
        !template.title.toLowerCase().includes(search) &&
        !template.description.toLowerCase().includes(search) &&
        !template.tags.some(tag => tag.toLowerCase().includes(search))
      ) {
        return false;
      }
      if (activeBu !== 'All' && template.bu !== activeBu) {
        return false;
      }
      if (activeTheme !== 'All' && (!Array.isArray(template.theme) || !template.theme.includes(activeTheme))) {
        return false;
      }
      return true;
    });
  }, [templates, searchTerm, activeBu, activeTheme]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleBuChange = (bu) => setActiveBu(bu);
  const handleThemeChange = (theme) => setActiveTheme(theme);
  const handleTemplateClick = (template) => router.push(`/templates/${template.id}`);

  return (
    <MainLayout>
      <PageHeader title="Premium Templates" />
      <div className="flex-1 overflow-y-auto">
        <SearchBar onSearch={handleSearch} />
        <FilterBar activeBu={activeBu} onBuChange={handleBuChange} activeTheme={activeTheme} onThemeChange={handleThemeChange} />
        <TemplateGrid templates={filteredTemplates} onTemplateClick={handleTemplateClick} />
      </div>
    </MainLayout>
  );
}
