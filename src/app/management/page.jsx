'use client';

import { useState, useEffect } from 'react';

import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import ManagementHeader from '../components/management/ManagementHeader';
import ManagementForm from '../components/management/ManagementForm';
import ManagementTable from '../components/management/ManagementTable';

export default function ManagementPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    bu: '',
    theme: '',
    packages: [],
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  async function fetchTemplates() {
    setLoading(true);
    const res = await fetch('/api/templates');
    const data = await res.json();
    setTemplates(data);
    setLoading(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags.split(',').map(t => t.trim()),
      theme: form.theme.split(',').map(t => t.trim()),
      packages: form.packages.map(pkg => ({
        ...pkg,
        img: Array.isArray(pkg.img) ? pkg.img : [],
      })),
    };
    if (editId) {
      await fetch(`/api/templates/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch('/api/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    setForm({ title: '', description: '', image: '', category: '', tags: '', bu: '', theme: '', packages: [] });
    setEditId(null);
    fetchTemplates();
  }

  function handlePackageChange(idx, field, value) {
    setForm(f => {
      const pkgs = [...(f.packages || [])];
      pkgs[idx] = { ...pkgs[idx], [field]: value };
      return { ...f, packages: pkgs };
    });
  }

  function handleAddPackage() {
    setForm(f => ({ ...f, packages: [...(f.packages || []), { title: '', des: '', o: '', img: [] }] }));
  }

  function handleRemovePackage(idx) {
    setForm(f => {
      const pkgs = [...(f.packages || [])];
      pkgs.splice(idx, 1);
      return { ...f, packages: pkgs };
    });
  }

  function handleEdit(template) {
    setForm({
      title: template.title,
      description: template.description,
      image: template.image,
      category: template.category,
      tags: template.tags.join(','),
      bu: template.bu,
      theme: template.theme.join(','),
      packages: template.packages?.map(pkg => ({
        ...pkg,
        img: Array.isArray(pkg.img) ? pkg.img : [],
      })) || [],
    });
    setEditId(template.id);
  }

  async function handleDelete(id) {
    if (confirm('Delete this template?')) {
      await fetch(`/api/templates/${id}`, { method: 'DELETE' });
      fetchTemplates();
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1117] font-sans">
      <PageHeader title="Premium Management" />
      <main className="max-w-lg mx-auto px-4 py-6 space-y-8">
        <ManagementHeader />
        <ManagementForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          editId={editId}
          onCancel={() => { setEditId(null); setForm({ title: '', description: '', image: '', category: '', tags: '', bu: '', theme: '', packages: [] }); }}
          onPackageChange={handlePackageChange}
          onAddPackage={handleAddPackage}
          onRemovePackage={handleRemovePackage}
        />
        <ManagementTable
          templates={templates}
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={loading}
        />
      </main>
    </div>
  );
}
