'use client';

import * as React from 'react';
import { ColumnDef, flexRender, Table as TanStackTable } from '@tanstack/react-table';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { DataTableToolbarProps } from '@/components/table/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/table/custom-table';
import { DataTableFooter } from '@/components/table/data-table-footer';
import { ReactElement } from 'react';

interface DataTableProps<TData, TValue> {
  table: TanStackTable<TData>;
  columns: ColumnDef<TData, TValue>[];
  toolbar: ReactElement<DataTableToolbarProps<TData>>;
}

export function DataTable<TData, TValue>({
  table,
  columns,
  toolbar
}: DataTableProps<TData, TValue>) {
  return (
    <div className="space-y-4">
      {toolbar}
      <div className="rounded-md border">
        <ScrollArea className="h-[666px] rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody rowCount={table.getRowModel().rows?.length}>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 1 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -1 }}
                    transition={{ duration: 0.4 }}
                    className={`h-12 border-b transition-colors hover:bg-[#2196f3]/10 data-[state=selected]:bg-muted`}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </motion.tr>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
      <DataTableFooter table={table} />
    </div>
  );
}
