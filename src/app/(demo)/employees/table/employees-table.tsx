'use client';

import * as React from 'react';
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState
} from '@tanstack/react-table';
import { columns } from '@/app/(demo)/employees/table/columns';
import { EmployeesDataTableToolbar } from '@/app/(demo)/employees/table/employees-data-table-toolbar';
import { DataTable } from '@/components/table/data-table';
import { useState } from 'react';
import { Employee } from '@/app/(demo)/employees/data/schema';
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/client/apiClient';
import { useSession } from 'next-auth/react';

interface EmployeesTableProps {
  employees: Employee[];
}

export function EmployeesTable({ employees }: EmployeesTableProps) {
  const [filtering, setFiltering] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const { data: session } = useSession();

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const { data } = await apiClient.GET('/user/', {
        headers: {
          'Authorization': 'Bearer ' + session?.accessToken,
        }
      });
      return data;
    },
    queryKey: ["employees"],
  });

  console.log(data);

  const table = useReactTable({
    data: data?.users ?? [],
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter: filtering
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    globalFilterFn: (row, columnIds, filterValue) => {
      return row.original.name.toLowerCase().includes(filterValue)
        // row.original?.jobTitle?.toLowerCase().includes(filterValue) ||
        // row.original?.phoneNumber?.includes(filterValue);
    }
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      toolbar={
        <EmployeesDataTableToolbar
          table={table}
          setFiltering={setFiltering}
          filtering={filtering}
        />
      }
    />
  );
}
