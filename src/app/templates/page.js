'use client';

import { useState, useMemo } from 'react';
import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import SearchBar from '../components/templates/SearchBar';
import FilterBar from '../components/templates/FilterBar';
import TemplateGrid from '../components/templates/TemplateGrid';
import { templatesData } from '../data/templates';

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

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

    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(template => template.category === activeFilter);
    }

    return filtered;
  }, [searchTerm, activeFilter]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleTemplateClick = (template) => {
    // Handle template selection (could open modal, navigate, etc.)
    console.log('Template clicked:', template);
  };

  return (
    <MainLayout>
      <PageHeader title="Templates" />
      <div className="flex-1 overflow-y-auto">
        <SearchBar onSearch={handleSearch} />
        <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        <TemplateGrid templates={filteredTemplates} onTemplateClick={handleTemplateClick} />
      </div>
    </MainLayout>
  );
}
