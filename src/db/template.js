import { prisma } from '../lib/prisma';

export async function getAllTemplates() {
  return await prisma.template.findMany({
    include: { packages: true }
  });
}

export async function getTemplateById(id) {
  return await prisma.template.findUnique({
    where: { id },
    include: { packages: true }
  });
}

export async function createTemplate(data) {
  return await prisma.template.create({
    data,
    include: { packages: true }
  });
}

export async function updateTemplate(id, data) {
  return await prisma.template.update({
    where: { id },
    data,
    include: { packages: true }
  });
}

export async function deleteTemplate(id) {
  return await prisma.template.delete({
    where: { id }
  });
}
