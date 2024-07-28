import { ContentLayout } from '@/components/admin-panel/content-layout';
import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { z } from 'zod';
import { taskSchema } from '@/app/(demo)/tools/data/schema';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/app/(demo)/tools/table/columns';
import { DataTableToolbar } from '@/app/(demo)/tools/table/data-table-toolbar';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.'
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), '/src/app/(demo)/tools/data/tasks.json')
  );

  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}

export default async function CategoriesPage() {
  const tasks = await getTasks();

  return (
    <ContentLayout title="Tools">
      <DataTable data={tasks} columns={columns} toolbar={DataTableToolbar} />
    </ContentLayout>
  );
}
