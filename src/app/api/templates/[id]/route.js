import { NextResponse } from 'next/server';
import { getTemplateById, updateTemplate, deleteTemplate } from '@/db/template';

// GET /api/templates/[id]
export async function GET(req, { params }) {
  const { id } = params;
  const template = await getTemplateById(Number(id));
  if (!template) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(template);
}

// PUT /api/templates/[id]
export async function PUT(req, { params }) {
  const { id } = params;
  const data = await req.json();
  const template = await updateTemplate(Number(id), data);
  return NextResponse.json(template);
}

// DELETE /api/templates/[id]
export async function DELETE(req, { params }) {
  const { id } = params;
  await deleteTemplate(Number(id));
  return NextResponse.json({ success: true });
}
