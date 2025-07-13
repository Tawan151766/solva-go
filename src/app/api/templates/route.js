import { NextResponse } from 'next/server';
import { getAllTemplates, getTemplateById, createTemplate } from '@/db/template';

// GET /api/templates - get all templates
export async function GET() {
  const templates = await getAllTemplates();
  return NextResponse.json(templates);
}

// POST /api/templates - create a new template
export async function POST(req) {
  const data = await req.json();
  const template = await createTemplate(data);
  return NextResponse.json(template);
}
