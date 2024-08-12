import { z } from 'zod';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Metadata } from 'next';
import * as React from 'react';
import { EmployeesTable } from '@/app/(demo)/employees/table/employees-table';
import { promises as fs } from 'fs';
import path from 'path';
import { employeeSchema } from '@/app/(demo)/employees/data/schema';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.'
};

// Simulate a database read for tasks.
async function getEmployees() {
  const data = await fs.readFile(
    path.join(process.cwd(), '/src/app/(demo)/employees/data/employees.json')
  );

  const employees = JSON.parse(data.toString());
  return z.array(employeeSchema).parse(employees);
}

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <ContentLayout title="Tools">
      <EmployeesTable employees={employees} />
    </ContentLayout>
  );
}
