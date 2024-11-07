import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function HomeTab() {
    const students = [
        {
          id: 1,
          name: "Lhourde Ian Ros Sube",
          grade: 3,
          section: "DTS IT-1E2",
          status: "Enrolled",
        },
        {
          id: 2,
          name: "Zanjoe Gonzales",
          grade: 7,
          section: "Automotive",
          status: "Irregular",
        },
        {
          id: 3,
          name: "Ryan Delos Santos",
          grade: 1,
          section: "DTS NASSA-MOON",
          status: "Dropped",
        },
        {
          id: 4,
          name: "Jason Deguzman",
          grade: 12,
          section: "Barney-Dome",
          status: "Roar-roar!!",
        },
      ]

    return(
        <main>
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
                {students.map((student) => (
                  <TableRow key={student.id} className="cursor-pointer" onClick={() => console.log(student)}>
                    <TableCell className="w-[10%] pl-10">{student.id}</TableCell>
                    <TableCell className="w-[30%]">{student.name}</TableCell>
                    <TableCell className="w-[10%] pl-6">{student.grade}</TableCell>
                    <TableCell className="w-[15%]">{student.section}</TableCell>
                    <TableCell className="w-[15%]">{student.status}</TableCell>
                    <TableCell className="w-[100%] flex justify-center items-center py-2 gap-2">
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption>A list of students as of S.Y. 2024-2025.</TableCaption>
            </Table>
        </main>
    )
}