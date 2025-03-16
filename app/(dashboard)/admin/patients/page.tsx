"use client";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { PatientInfoType } from "@/types";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data: Omit<PatientInfoType, "medicalIssues">[] = [
  {
    patientId: "P001",
    name: "Alice Johnson",
    password: "securePassword123",
    age: 28,
    contactNumber: "+1234567890",
    emailAddress: "alice.johnson@example.com",
    location: "New York, USA",
    gender: "Female",
    bloodType: "A+",
    allergies: ["Pollen", "Dust"],
  },
  {
    patientId: "P002",
    name: "Bob Smith",
    password: "anotherSecurePass456",
    age: 42,
    contactNumber: "+0987654321",
    emailAddress: "bob.smith@example.com",
    location: "Los Angeles, USA",
    gender: "Male",
    bloodType: "B-",
    allergies: [],
  },
  {
    patientId: "P003",
    name: "Charlie Brown",
    password: "charliePass789",
    age: 35,
    contactNumber: "+1122334455",
    emailAddress: "charlie.brown@example.com",
    location: "Chicago, USA",
    gender: "Male",
    bloodType: "O+",
    allergies: ["Penicillin"],
  },
  {
    patientId: "P004",
    name: "Diana Prince",
    password: "wonderWomanPass",
    age: 29,
    contactNumber: "+9988776655",
    emailAddress: "diana.prince@example.com",
    location: "Seattle, USA",
    gender: "Female",
    bloodType: "AB+",
  },
];

export const columns: ColumnDef<Omit<PatientInfoType, "medicalIssues">>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "patientId",
    header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("patientId")}</div>
    ),
  },
  {
    accessorKey: "profileImage",
    header: () => <div className="text-center">Profile Image</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Avatar>
          <AvatarImage
            src={row.getValue("profileImage") || "https://github.com/shadcn.png"}
            alt={row.getValue("name")}
          />
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div className="text-center">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "password",
    header: () => <div className="text-center">Password</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("password")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: () => <div className="text-center">Age</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("age")}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: () => <div className="text-center">Gender</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("gender")}</div>
    ),
  },
  {
    accessorKey: "contactNumber",
    header: () => <div className="text-center">Contact Number</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("contactNumber")}</div>
    ),
  },
  {
    accessorKey: "emailAddress",
    header: () => <div className="text-center">Email</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("emailAddress")}</div>
    ),
  },
  {
    accessorKey: "location",
    header: () => <div className="text-center">Location</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "bloodType",
    header: () => <div className="text-center">Blood Type</div>,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("bloodType")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const info = row.original;
      return (
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link className="flex items-center gap-1" href={`/admin/patients/${info.patientId}`}>
                  <IoEyeOutline className="text-primary" /> View
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className="flex items-center gap-1" href={`/admin/patients/delete/${info.patientId}`}>
                  <RiDeleteBinLine className="text-red-700" /> Delete
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex items-center gap-1" href={`/admin/patients/edit/${info.patientId}`}>
                  <MdOutlineEdit className="text-blue-600" /> Edit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: { pageSize: 5 },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={
            (table.getColumn("emailAddress")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("emailAddress")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-secondary">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}