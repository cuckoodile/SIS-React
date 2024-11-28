// Component imports
"use client"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import MyCustomDialog from "../../components/MyDialog"
import MyChart from "../../components/MyChart"

import { GenderPanel } from "../../components/MyUnitOverview"

import { TrendingUp, Trash2, Pencil, UserPlus } from "lucide-react"

// Methods and necessities import
import { useState, useEffect, useRef } from "react"
import { retrieveProfiles } from "../../api/profiles"
import React from "react"


export default function HomeTab() {
  // State references
  const [reloader, setReloader] = useState(false)
  const [students, setStudents] = useState([])
  const [isDialogOpen, setisDialogOpen] = React.useState(false)
  const [viewDialogData, setViewDialogData] = useState({ title: '' })

  // Value references
  const studentIdRef = useRef(null)
  const studentNameRef = useRef(null)
  const gradeRef = useRef(null)
  const sectionRef = useRef(null)
  const statusRef = useRef(null)

  // Database manipulation
  useEffect(() => {
    retrieveProfiles()
      .then(res => {
        if (res.ok) {
          setStudents(res.data)
          // console.log(res.data)
          // console.log(res.data.address.province)
        }
      })
  }, [reloader])


  return (
    <main className="flex flex-col gap-4">

      {/* Sample summary component */}
      <section className="p-3 border-2 flex gap-4">

        <GenderPanel />   {/* Total gender section */}
        <MyChart />   {/* Summary chart */}

      </section>

      {/* Main Content */}
      <section className="flex flex-col gap-4 mt-4">

        {/* Add student */}
        <section className="flex justify-end">
          <Button className="right-0" onClick={() => {
            setisDialogOpen(true)
            setViewDialogData({ title: 'ADD' })
          }}>New Student</Button>
        </section>

        {/* Table content */}
        <Table className="border-2">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10%]">Student ID</TableHead>
              <TableHead className="w-[30%] pl-10">Name</TableHead>
              <TableHead className="w-[10%]">Grade</TableHead>
              <TableHead className="w-[15%]">Section</TableHead>
              <TableHead className="w-[15%]">Status</TableHead>
              <TableHead className="w-[13%] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students?.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="w-[10%] pl-10">{student.id}</TableCell>
                <TableCell className="w-[30%]">{student.lastName}, {student.firstName} {student.middleName}</TableCell>
                <TableCell className="w-[10%] pl-6">{student.grade}</TableCell>
                <TableCell className="w-[15%]">{student.section}</TableCell>
                <TableCell className="w-[15%]">{student.status}</TableCell>
                <TableCell className="w-[100%] flex justify-center items-center py-2 gap-2">
                  <Button variant={"custom"} onClick={() => {
                    setisDialogOpen(true)
                    setViewDialogData({ ...student, title: 'VIEW' })
                  }}><Pencil />View</Button>
                  <Button variant={"custom"} onClick={() => {
                    setisDialogOpen(true)
                    setViewDialogData({ ...student, title: 'EDIT' })
                  }}><UserPlus />Edit</Button>
                  <Button variant={"custom"} onClick={() => {
                    setisDialogOpen(true)
                    setViewDialogData({ ...student, title: 'DELETE' })
                  }}><Trash2 />Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableCaption>A list of students as of S.Y. 2024-2025.</TableCaption>

          {/* VIEW dialog pop-up */}
          <MyCustomDialog data={viewDialogData} open={isDialogOpen} setOpen={setisDialogOpen} reloader={reloader} setReloader={setReloader}>
          </MyCustomDialog>
        </Table>

        {/* Experiment data table */}
        {/* <section className="w-full bg-red-400">
          <input type="text" placeholder="Filter" onChange={handleFilter}/>
          <DataTable columns={columns} data={records} pagination/>
        </section> */}
      </section>
    </main>
  )
}