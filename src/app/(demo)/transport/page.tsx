import { ContentLayout } from '@/components/admin-panel/content-layout';
import { columns } from '@/app/(demo)/transport/components/columns';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { taskSchema } from '@/app/(demo)/tools/data/schema';
import { DataTableToolbar } from '@/app/(demo)/transport/components/data-table-toolbar';
import { DataTable } from '@/components/table/data-table';

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), '/src/app/(demo)/transport/data/tasks.json')
  );

  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}

export default async function TransportPage() {
  const tasks = await getTasks();

  return (
    <ContentLayout title="Transport">
      <DataTable data={tasks} columns={columns} toolbar={DataTableToolbar} />
    </ContentLayout>
  );
}
