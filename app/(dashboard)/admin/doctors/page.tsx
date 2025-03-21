"use client";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import {DoctorInfoType  } from "@/types";
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

const data: DoctorInfoType[] = [
  {
    doctorId: "m5gr84i9",
    name: "Dr. Ken",
    password: "securePassword1",
    age: 45,
    specialization: "Cardiology",
    contactNumber: "123-456-7890",
    emailAddress: "ken99@yahoo.com",
    location: "City Hospital",
    yearsOfExperience: 10,
    isDoctorVerified: true,
  },
  {
    doctorId: "3u1reuv4",
    name: "Dr. Abe",
    password: "securePassword2",
    age: 38,
    specialization: "Neurology",
    contactNumber: "234-567-8901",
    emailAddress: "Abe45@gmail.com",
    location: "General Clinic",
    yearsOfExperience: 8,
    isDoctorVerified: true,
  },
  {
    doctorId: "derv1ws0",
    name: "Dr. Monserrat",
    password: "securePassword3",
    age: 30,
    specialization: "Pediatrics",
    contactNumber: "345-678-9012",
    emailAddress: "Monserrat44@gmail.com",
    location: "Children's Hospital",
    yearsOfExperience: 5,
    isDoctorVerified: false,
  },
  {
    doctorId: "5kma53ae",
    name: "Dr. Silas",
    password: "securePassword4",
    age: 50,
    specialization: "Dermatology",
    contactNumber: "456-789-0123",
    emailAddress: "Silas22@gmail.com",
    location: "Skin Care Clinic",
    yearsOfExperience: 12,
    isDoctorVerified: true,
  },
  {
    doctorId: "bhqecj4p",
    name: "Dr. Carmella",
    password: "securePassword5",
    age: 55,
    specialization: "Oncology",
    contactNumber: "567-890-1234",
    emailAddress: "carmella@hotmail.com",
    location: "Cancer Center",
    yearsOfExperience: 15,
    isDoctorVerified: true,
  },
  {
    doctorId: "m5gr84i9",
    name: "Dr. Ken",
    password: "securePassword1",
    age: 45,
    specialization: "Cardiology",
    contactNumber: "123-456-7890",
    emailAddress: "ken99@yahoo.com",
    location: "City Hospital",
    yearsOfExperience: 10,
    isDoctorVerified: true,
  },
  {
    doctorId: "3u1reuv4",
    name: "Dr. Abe",
    password: "securePassword2",
    age: 38,
    specialization: "Neurology",
    contactNumber: "234-567-8901",
    emailAddress: "Abe45@gmail.com",
    location: "General Clinic",
    yearsOfExperience: 8,
    isDoctorVerified: true,
  },
  {
    doctorId: "derv1ws0",
    name: "Dr. Monserrat",
    password: "securePassword3",
    age: 30,
    specialization: "Pediatrics",
    contactNumber: "345-678-9012",
    emailAddress: "Monserrat44@gmail.com",
    location: "Children's Hospital",
    yearsOfExperience: 5,
    isDoctorVerified: false,
  },
  {
    doctorId: "5kma53ae",
    name: "Dr. Silas",
    password: "securePassword4",
    age: 50,
    specialization: "Dermatology",
    contactNumber: "456-789-0123",
    emailAddress: "Silas22@gmail.com",
    location: "Skin Care Clinic",
    yearsOfExperience: 12,
    isDoctorVerified: true,
  },
  {
    doctorId: "bhqecj4p",
    name: "Dr. Carmella",
    password: "securePassword5",
    age: 55,
    specialization: "Oncology",
    contactNumber: "567-890-1234",
    emailAddress: "carmella@hotmail.com",
    location: "Cancer Center",
    yearsOfExperience: 15,
    isDoctorVerified: true,
  },
  {
    doctorId: "5kma53ae",
    name: "Dr. Silas",
    password: "securePassword4",
    age: 50,
    specialization: "Dermatology",
    contactNumber: "456-789-0123",
    emailAddress: "Silas22@gmail.com",
    location: "Skin Care Clinic",
    yearsOfExperience: 12,
    isDoctorVerified: true,
  },
  {
    doctorId: "bhqecj4p",
    name: "Dr. Carmella",
    password: "securePassword5",
    age: 55,
    specialization: "Oncology",
    contactNumber: "567-890-1234",
    emailAddress: "carmella@hotmail.com",
    location: "Cancer Center",
    yearsOfExperience: 15,
    isDoctorVerified: true,
  },
  {
    doctorId: "m5gr84i9",
    name: "Dr. Ken",
    password: "securePassword1",
    age: 45,
    specialization: "Cardiology",
    contactNumber: "123-456-7890",
    emailAddress: "ken99@yahoo.com",
    location: "City Hospital",
    yearsOfExperience: 10,
    isDoctorVerified: true,
  },
  {
    doctorId: "3u1reuv4",
    name: "Dr. Abe",
    password: "securePassword2",
    age: 38,
    specialization: "Neurology",
    contactNumber: "234-567-8901",
    emailAddress: "Abe45@gmail.com",
    location: "General Clinic",
    yearsOfExperience: 8,
    isDoctorVerified: true,
  },
  {
    doctorId: "derv1ws0",
    name: "Dr. Monserrat",
    password: "securePassword3",
    age: 30,
    specialization: "Pediatrics",
    contactNumber: "345-678-9012",
    emailAddress: "Monserrat44@gmail.com",
    location: "Children's Hospital",
    yearsOfExperience: 5,
    isDoctorVerified: false,
  },
  {
    doctorId: "5kma53ae",
    name: "Dr. Silas",
    password: "securePassword4",
    age: 50,
    specialization: "Dermatology",
    contactNumber: "456-789-0123",
    emailAddress: "Silas22@gmail.com",
    location: "Skin Care Clinic",
    yearsOfExperience: 12,
    isDoctorVerified: true,
  },
  {
    doctorId: "bhqecj4p",
    name: "Dr. Carmella",
    password: "securePassword5",
    age: 55,
    specialization: "Oncology",
    contactNumber: "567-890-1234",
    emailAddress: "carmella@hotmail.com",
    location: "Cancer Center",
    yearsOfExperience: 15,
    isDoctorVerified: true,
  },
];


export const columns: ColumnDef<DoctorInfoType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "doctorId",
    header: "ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("doctorId")}</div>
    ),
  },
  {
    accessorKey: "profileImage",
    header: () => <div className="text-center">Profile Image</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Avatar>
          <AvatarImage
            src={
              row.getValue("profileImage") || "https://github.com/shadcn.png"
            }
            alt={row.getValue("name")}
          />
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "password",
    header: () => <div className="text-right">Password</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("password")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: () => <div className="text-right">Age</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("age")}</div>
    ),
  },
  {
    accessorKey: "specialization",
    header: () => <div className="text-right">Specialization</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("specialization")}
      </div>
    ),
  },
  {
    accessorKey: "contactNumber",
    header: () => <div className="text-right">Contact Number</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("contactNumber")}
      </div>
    ),
  },
  {
    accessorKey: "emailAddress",
    header: () => <div className="text-right">Email</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("emailAddress")}
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: () => <div className="text-right">Location</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "isDoctorVerified",
    header: () => <div className="text-right">Verified</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("isDoctorVerified") ? "Yes" : "No"}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const info = row.original;

      return (
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
              <Link className=" flex items-center gap-1" href={`/admin/doctors/${info.doctorId}`}>
                <IoEyeOutline className=" text-primary" /> View
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <Link  className=" flex items-center gap-1" href={`/admin/doctors/delete/${info.doctorId}`}>
                <RiDeleteBinLine className=" text-red-700" /> Delete{" "}
              </Link>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link  className=" flex items-center gap-1" href={`/admin/doctors/edit/${info.doctorId}`}>
                <MdOutlineEdit className=" text-blue-600" /> Edit{" "}
              </Link>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
    initialState:{
      pagination:{pageSize:5}
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
                  <TableHead key={header.id}>
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
                    <TableCell key={cell.id}>
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
