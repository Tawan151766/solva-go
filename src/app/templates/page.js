'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import SearchBar from '../components/templates/SearchBar';
import FilterBar from '../components/templates/FilterBar';
import TemplateGrid from '../components/templates/TemplateGrid';
import { templatesData } from '../data/templates';

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBu, setActiveBu] = useState('All');
  const [activeTheme, setActiveTheme] = useState('All');
  const router = useRouter();

  const filteredTemplates = useMemo(() => {
    let filtered = templatesData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(template =>
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by bu
    if (activeBu !== 'All') {
      filtered = filtered.filter(template => template.bu === activeBu);
    }

    // Filter by theme (theme is now an array)
    if (activeTheme !== 'All') {
      filtered = filtered.filter(template => Array.isArray(template.theme) && template.theme.includes(activeTheme));
    }

    return filtered;
  }, [searchTerm, activeBu, activeTheme]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleBuChange = (bu) => {
    setActiveBu(bu);
  };

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };

  const handleTemplateClick = (template) => {
    router.push(`/templates/${template.id}`);
  };

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
