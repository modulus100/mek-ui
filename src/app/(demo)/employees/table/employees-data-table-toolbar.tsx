// 'use client';

import { Cross2Icon } from '@radix-ui/react-icons';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTableViewOptions } from '@/components/table/data-table-view-options';
import React from 'react';
import { Table } from '@tanstack/react-table';

interface EmployeesDataTableToolbarProps<TData> {
  table: Table<TData>;
  setFiltering: (value: string) => void;
  filtering: string;
}

export function EmployeesDataTableToolbar<TData>({
  table,
  setFiltering,
  filtering
}: EmployeesDataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltering(event.target.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by text..."
          // value={(table.getColumn('name')?.getFilterValue() as string) || ''}
          value={filtering}
          onChange={handleFilterChange}
          className="h-8 w-[150px] lg:w-[250px]" // Responsive width
        />
        {/*{table.getColumn('status') && (*/}
        {/*  <DataTableFacetedFilter*/}
        {/*    column={table.getColumn('status')}*/}
        {/*    title="Status"*/}
        {/*    options={statuses}*/}
        {/*  />*/}
        {/*)}*/}
        {/*{table.getColumn('priority') && (*/}
        {/*  <DataTableFacetedFilter*/}
        {/*    column={table.getColumn('priority')}*/}
        {/*    title="Priority"*/}
        {/*    options={priorities}*/}
        {/*  />*/}
        {/*)}*/}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
